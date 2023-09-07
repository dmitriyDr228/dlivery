import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {UserRegistrationDto} from "./dto/user-registration.dto";
import {RolesService} from "../roles/roles.service";
import {RoleAddDto} from "./dto/role-add.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {
    }

    async create(dto: UserRegistrationDto) {
        const user = await this.userRepository.create({...dto});
        const role = await this.roleService.findByValue("USER");
        await user.$set('roles', [role.id]);
        // user.roles = [role];
        return user.save();
    }

    async findAll() {
        return this.userRepository.findAll({
            include: {all: true}
        })
    }

    async findOneById(id: number) {
        return this.userRepository.findOne({
            where: {id},
            include: {all: true}
        })
    }

    async addNewRole(dto: RoleAddDto) {

        const user = await this.findOneByEmail(dto.userEmail);
        if (!user){
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
        }

        const role = await this.roleService.findByValue(dto.roleValue);
        if (!role){
            throw new HttpException('Роль не найдна', HttpStatus.NOT_FOUND);
        }

        await user.$add('role', role.id);
        user.roles = [...user.roles, role];
        return user.save();
    }

    async findOneByEmail(email: string) {
        return this.userRepository.findOne({
            where: {email},
            include: {all: true}
        })
    }
}