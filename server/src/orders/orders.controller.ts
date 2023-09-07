import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {OrdersService} from "./orders.service";
import {OrderCreateDto} from "./dto/order-create.dto";

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) {
    }

    @Post()
    create(@Body() dto: OrderCreateDto) {
        return this.orderService.create(dto);
    }

    @Get()
    findAll() {
        return this.orderService.findAll();
    }

    @Get('/:id')
    findOneById(@Param('id') id: number) {
        return this.orderService.findOneById(id)
    }

    @Get('/:userEmail')
    findByUserEmail(@Param('userEmail') userEmail: string) {
        return this.orderService.findOneByUserEmail(userEmail)
    }

    @Post('/updateStatus/:id')
    updateStatusReady(@Param('id') id: number) {
        return this.orderService.updateStatus(id);
    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.orderService.deleteOrder(id);
    }
}