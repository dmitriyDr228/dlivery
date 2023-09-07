import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {OrdersReadyService} from "./orders-ready.service";
import {OrderCreateDto} from "../dto/order-create.dto";
import {OrdersReadyCreateDto} from "./dto/orders-ready-create.dto";

@Controller('orders-ready')
export class OrdersReadyController {
    constructor(private ordersReadyService: OrdersReadyService) {
    }

    @Get()
    findAll() {
        return this.ordersReadyService.findAll();
    }

    @Post()
    create(@Body() dto: OrdersReadyCreateDto) {
        return this.ordersReadyService.create(dto);
    }

    @Get('/:value')
    findOneByValue(@Param('value') value: string) {
        return this.ordersReadyService.findOneByValue(value);
    }

}