import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Order} from "./orders.model";
import {OrdersController} from "./orders.controller";
import {OrdersService} from "./orders.service";
import {MealsModule} from "../meals/meals.module";
import {OrderReady} from "./orders-ready/order-ready.model";
import {OrdersReadyModule} from "./orders-ready/orders-ready.module";
import {OrdersMeals} from "./orders-meals.model";

@Module({
    controllers: [OrdersController],
    imports: [
        SequelizeModule.forFeature([Order, OrderReady, OrdersMeals]),
        MealsModule,
        OrdersModule,
        OrdersReadyModule
    ],
    exports: [OrdersService],
    providers: [OrdersService],
})
export class OrdersModule {
}