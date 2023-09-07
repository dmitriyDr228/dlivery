import {Module} from "@nestjs/common";
import {IngredientController} from "./ingredient.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Ingredient} from "./ingredient.model";
import {IngredientService} from "./ingredient.service";
import {FileModule} from "../files/file.module";

@Module({
    imports: [
        SequelizeModule.forFeature([Ingredient]),
        FileModule
    ],
    providers: [IngredientService],
    controllers: [IngredientController],
    exports: [IngredientService],
})
export class IngredientModule {

}