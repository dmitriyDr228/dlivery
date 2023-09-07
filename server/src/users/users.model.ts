import {BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {Role} from "../roles/roles.model";
import {RolesUsers} from "../roles/roles-users.model";

interface UserCreationAttributes {
    readonly email: string;
    readonly password: string;
    readonly address: string;
    readonly number: number;
    readonly FIO: string;

}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes> {
    @Column({type: DataTypes.INTEGER, primaryKey: true, unique: true, allowNull: false, autoIncrement: true})
    id: number;

    @Column({type: DataTypes.STRING, allowNull: false, unique: true})
    email: string;

    @Column({type: DataTypes.STRING, allowNull: false})
    password: string;

    @Column({type: DataTypes.STRING, allowNull: false})
    address: string;

    @Column({type: DataTypes.BIGINT, allowNull: false})
    number: number;

    @Column({type: DataTypes.STRING, allowNull: false})
    FIO: string;

    @BelongsToMany(() => Role, () => RolesUsers)
    roles: Role[];
}