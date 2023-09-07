import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {User} from "../users/users.model";
import {Role} from "./roles.model";

@Table({tableName: 'roles_users', updatedAt: false, createdAt: false})
export class RolesUsers extends Model<RolesUsers> {

    @Column({type: DataTypes.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataTypes.INTEGER})
    userId: number;

    @ForeignKey(() => Role)
    @Column({type: DataTypes.INTEGER})
    roleId: number;

}