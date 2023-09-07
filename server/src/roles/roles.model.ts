import {BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {User} from "../users/users.model";
import {RolesUsers} from "./roles-users.model";

interface RoleCreationAttributes {
    readonly value: string;
    readonly description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttributes> {

    @Column({type: DataTypes.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type: DataTypes.STRING, unique: true, allowNull: false})
    value: string;

    @Column({type: DataTypes.STRING, allowNull: false})
    description: string;

    @BelongsToMany(()=>User, ()=> RolesUsers)
    users: User[];
}