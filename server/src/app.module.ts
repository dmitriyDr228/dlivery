import {Module} from "@nestjs/common";
import * as process from "process";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {IngredientModule} from "./Ingredients/ingredient.module";
import {Ingredient} from "./Ingredients/ingredient.model";
import {FileModule} from "./files/file.module";
import {Meal} from "./meals/meals.model";
import {MealsIngredients} from "./meals/meals-ingredients.model";
import {MealsModule} from "./meals/meals.module";
import {RolesModule} from "./roles/roles.module";
import {UsersModule} from "./users/users.module";
import {User} from "./users/users.model";
import {Role} from "./roles/roles.model";
import {RolesUsers} from "./roles/roles-users.model";
import {AuthModule} from "./auth/auth.module";
import {OrdersModule} from "./orders/orders.module";
import {Order} from "./orders/orders.model";
import {OrdersReadyModule} from "./orders/orders-ready/orders-ready.module";
import {OrdersMeals} from "./orders/orders-meals.model";
import {OrderReady} from "./orders/orders-ready/order-ready.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Ingredient, Meal, MealsIngredients, User, Role, RolesUsers, Order, OrdersMeals, OrderReady],
            autoLoadModels: true
        }),
        IngredientModule,
        FileModule,
        AuthModule,
        MealsModule,
        RolesModule,
        UsersModule,
        OrdersModule,
        OrdersReadyModule


    ],
    controllers: [],
    providers: []

})
export class AppModule {
}