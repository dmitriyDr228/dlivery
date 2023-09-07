import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {MealsService} from "./meals.service";
import {MealsCreateDto} from "./dto/meals-create.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('meals')
export class MealsController {
    constructor(private mealService: MealsService) {
    }

    @Get()
    findAll() {
        return this.mealService.findALl();
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() dto :MealsCreateDto,
           @UploadedFile() image: any){
        return this.mealService.create(dto, image)
    }
}