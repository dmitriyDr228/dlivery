import {forwardRef, Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {RolesUsers} from "../roles/roles-users.model";
import {Role} from "../roles/roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [UsersController],
    exports: [UsersService],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, RolesUsers]),
        RolesModule,
        forwardRef(() => AuthModule)
    ]
})
export class UsersModule {
}