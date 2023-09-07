import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UserRegistrationDto} from "./dto/user-registration.dto";
import {RoleAddDto} from "./dto/role-add.dto";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Post()
    create(@Body() dto: UserRegistrationDto) {
        return this.userService.create(dto);
    }

    @Get('/:id')
    findOneById(@Param() id: number) {
        return this.userService.findOneById(id);
    }

    @Post('/addRole')
    addRole(@Body() dto: RoleAddDto){
        return this.userService.addNewRole(dto);
    }

    @Get()
    findAll(){
        return this.userService.findAll();
    }

}