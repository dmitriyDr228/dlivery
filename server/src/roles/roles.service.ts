import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {RoleCreateDto} from "./dto/role-create.dto";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {
    }

    async create(dto: RoleCreateDto) {
        return this.roleRepository.create({...dto});
    }

    async findAll() {
        return this.roleRepository.findAll();
    }

    async findByValue(value: string) {
        return this.roleRepository.findOne({
            where: {value}
        });
    }
}