import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Ingredient} from "./ingredient.model";
import {IngredientCreateDto} from "./dto/ingredient-create.dto";
import {CALORIES_FATS, CALORIES_PROTEIN_OR_CARBOHYDRATES} from "../static";
import {FileService} from "../files/file.service";

@Injectable()
export class IngredientService {
    constructor(@InjectModel(Ingredient) private ingredientRepository: typeof Ingredient,
                private fileService: FileService) {
    }

    async findAll() {
        return this.ingredientRepository.findAll({
            include: [{all: true}]
        })
    }

    async findById(id: number) {
        return this.ingredientRepository.findOne({
            where: {id: id},
            include: [{all: true}]
        })
    }

    async findByTitle(title: string) {
        return this.ingredientRepository.findOne({
            where: {title: title},
            include: [{all: true}]
        })
    }

    async create(dto: IngredientCreateDto, image) {
        const fileName = await this.fileService.createFile(image);
        const ingredient = await this.ingredientRepository.create({...dto, image: fileName});

        ingredient.calories = (ingredient.fats * CALORIES_FATS +
            (ingredient.carbohydrates + ingredient.protein)
            * CALORIES_PROTEIN_OR_CARBOHYDRATES) * dto.count;

        return ingredient.save();
    }
}