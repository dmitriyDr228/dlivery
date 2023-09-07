import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {RolesService} from "./roles.service";
import {UsersService} from "../users/users.service";
import {RoleCreateDto} from "./dto/role-create.dto";

@Controller('roles')
export class RolesController {
    constructor(
        private roleService: RolesService) {
    }

    @Post()
    create(@Body() dto: RoleCreateDto){
        return this.roleService.create(dto);
    }
    @Get()
    findAll(){
        return this.roleService.findAll();
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.findByValue(value);
    }
}