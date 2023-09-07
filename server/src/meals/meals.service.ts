import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Meal} from "./meals.model";
import {FileService} from "../files/file.service";
import {MealsCreateDto} from "./dto/meals-create.dto";
import {IngredientService} from "../Ingredients/ingredient.service";

@Injectable()
export class MealsService {
    constructor(@InjectModel(Meal) private mealRepository: typeof Meal,
                private fileService: FileService,
                private ingredientService: IngredientService) {
    }

    async findALl() {
        return this.mealRepository.findAll({
            include: [{all: true}]
        })
    }

    async findById(id: number) {
        return this.mealRepository.findOne({
            include: [{all: true}],
            where: {id: id}
        })
    }

    async findByTitle(title: string): Promise<Meal> {
        return this.mealRepository.findOne({
            where: {title},
            include: {all: true}
        })
    }

    async create(dto: MealsCreateDto, image: any) {

        const fileName = await this.fileService.createFile(image);
        const meal = await this.mealRepository.create({...dto, image: fileName})
        for (let i = 0; i < dto.titleIngredients.length; i++) {
            await this.ingredientService.findByTitle(dto.titleIngredients[i])
                .then(ingredient => {
                    meal.$add('ingredients', [ingredient.id]);
                    meal.calories += ingredient.calories;
                    meal.protein += ingredient.protein;
                    meal.fats += ingredient.fats;
                    meal.carbohydrates += ingredient.carbohydrates;
                })
                .catch(reason => console.log(reason))
        }

        return meal.save();
    }
}