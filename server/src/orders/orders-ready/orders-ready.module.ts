import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {OrderReady} from "./order-ready.model";
import {OrdersReadyService} from "./orders-ready.service";
import {OrdersReadyController} from "./orders-ready.controller";

@Module({
    imports:[SequelizeModule.forFeature([OrderReady])],
    providers:[OrdersReadyService],
    controllers:[OrdersReadyController],
    exports:[OrdersReadyService],
})
export class OrdersReadyModule{}