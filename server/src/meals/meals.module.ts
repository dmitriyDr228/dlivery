import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Meal} from "./meals.model";
import {FileService} from "../files/file.service";
import {MealsController} from "./meals.controller";
import {MealsService} from "./meals.service";
import {MealsIngredients} from "./meals-ingredients.model";
import {Ingredient} from "../Ingredients/ingredient.model";
import {IngredientModule} from "../Ingredients/ingredient.module";
import {FileModule} from "../files/file.module";
import {OrdersMeals} from "../orders/orders-meals.model";

@Module({
    imports: [
        SequelizeModule.forFeature([Meal, MealsIngredients,OrdersMeals]),
        FileModule,
        IngredientModule
    ],
    controllers: [MealsController],
    exports: [MealsService],
    providers: [MealsService],
})
export class MealsModule {
}