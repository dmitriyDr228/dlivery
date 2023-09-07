import {InjectModel} from "@nestjs/sequelize";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {Order} from "./orders.model";
import {OrderCreateDto} from "./dto/order-create.dto";
import {MealsService} from "../meals/meals.service";
import {OrdersReadyService} from "./orders-ready/orders-ready.service";

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order) private orderRepository: typeof Order,
                private mealService: MealsService,
                private orderReadyService: OrdersReadyService) {
    }

    async create(dto: OrderCreateDto) {
        const order = await this.orderRepository.create({...dto})
        for (let i = 0; i < dto.mealsTitle.length; i++) {
            await this.mealService.findByTitle(dto.mealsTitle[i])
                .then(meal => {
                    order.$add('meals', [meal.id]);
                    order.price += meal.price;
                })
                .catch(err => {
                    console.log(err)
                })
        }
        const orderNoReadyStatus = await this.orderReadyService.findOneByValue('NO_READY');
        await order.$set('status', orderNoReadyStatus)
        return order.save();
    }

    async findAll() {
        return this.orderRepository.findAll({
            include: {all: true}
        })
    }

    async findOneById(id: number) {
        return this.orderRepository.findOne({
            where: {id},
            include: {all: true}
        })
    }

    async findOneByUserEmail(userEmail: string) {
        return this.orderRepository.findAll({
            include: {all: true},
            where: {userEmail}
        })
    }

    async updateStatus(orderId: number) {

        const order = await this.findOneById(orderId);
        if (!order) {
            throw new HttpException('Заказ не найден', HttpStatus.NOT_FOUND);
        }
        const orderReadyStatus = await this.orderReadyService.findOneByValue('READY');
        await order.$set('status', orderReadyStatus);
        order.status = orderReadyStatus;
        return order.save();
    }

    async deleteOrder(id: number) {
        return this.orderRepository.destroy({
            where:{id}
        })
    }

}