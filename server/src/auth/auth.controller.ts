import {Body, Controller, Post} from "@nestjs/common";
import {UserLoginDto} from "../users/dto/user-login.dto";
import {UserRegistrationDto} from "../users/dto/user-registration.dto";
import {AuthService} from "./auth.service";

@Controller('/auth')
export class AuthController{

    constructor(private authService: AuthService) {
    }
    @Post('/login')
    login(@Body() dto: UserLoginDto){
        return this.authService.login(dto);
    }

    @Post('/registration')
    registration(@Body() dto: UserRegistrationDto){
        return this.authService.registration(dto);
    }
}