import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {User} from "../users/users.model";
import {RolesUsers} from "./roles-users.model";
import {RolesService} from "./roles.service";
import {RolesController} from "./roles.controller";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [
        SequelizeModule.forFeature([Role, User, RolesUsers]),
    ],
    exports: [RolesService],
    providers: [RolesService],
    controllers: [RolesController]
})

export class RolesModule {
}