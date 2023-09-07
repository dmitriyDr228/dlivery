import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {IngredientService} from "./ingredient.service";
import {IngredientCreateDto} from "./dto/ingredient-create.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('/ingredients')
export class IngredientController {
    constructor(private ingredientService: IngredientService) {
    }

    @Get()
    findAll() {
        return this.ingredientService.findAll();
    }

    @Get('/:id')
    findOneById(@Param('id') id: number) {
        return this.ingredientService.findById(id);
    }

    @Get('/:title')
    findOneByTitle(@Param('title') title: string) {
        return this.ingredientService.findByTitle(title);
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() dto: IngredientCreateDto,
           @UploadedFile() image) {
        return this.ingredientService.create(dto, image);
    }

}