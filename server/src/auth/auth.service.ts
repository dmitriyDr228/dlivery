import {HttpException, HttpStatus, Injectable, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {UserLoginDto} from "../users/dto/user-login.dto";
import * as bcrypt from 'bcryptjs';
import {User} from "../users/users.model";
import {UserRegistrationDto} from "../users/dto/user-registration.dto";


@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }

    private async validateUser(dto: UserLoginDto) {
        const user = await this.userService.findOneByEmail(dto.email);
        const validatePassword = await bcrypt.compare(dto.password, user.password);
        if (user && validatePassword) {
            return user;
        }
        throw new UnauthorizedException({message: 'Некорректные логин или пароль'})
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, roles: user.roles};
        return {
            token: this.jwtService.sign(payload)
        };
    }

    async registration(dto: UserRegistrationDto) {

        const candidate = await this.userService.findOneByEmail(dto.email);
        if (candidate) {
            throw new HttpException('Пользователь уже существует', HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userService.create({...dto, password: hashPassword});
        const token = await this.generateToken(user);

        return {
            user, token
        }

    }

    async login(dto: UserLoginDto) {

        const user = await this.validateUser(dto);
        const token = await this.generateToken(user);
        return {
            user, token
        }
    }
}