import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {OrderReady} from "./order-ready.model";
import {OrderCreateDto} from "../dto/order-create.dto";
import {OrdersReadyCreateDto} from "./dto/orders-ready-create.dto";

@Injectable()
export class OrdersReadyService {
    constructor(@InjectModel(OrderReady) private ordersReadyRepository: typeof OrderReady) {
    }

    async findAll() {
        return this.ordersReadyRepository.findAll()
    }

    async create(dto: OrdersReadyCreateDto) {
        return this.ordersReadyRepository.create({...dto})
    }

    async findOneByValue(value: string): Promise<OrderReady> {
        return this.ordersReadyRepository.findOne({
            where: {value}
        })
    }

}