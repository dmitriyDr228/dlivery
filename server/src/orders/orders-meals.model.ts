import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
import {Meal} from "../meals/meals.model";
import {Order} from "./orders.model";

@Table({
    tableName: 'orders_meals', updatedAt: false, createdAt: false
})
export class OrdersMeals extends Model<OrdersMeals> {

    @Column({type: DataTypes.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true})
    id: number;

    @ForeignKey(() => Order)
    @Column({type: DataTypes.INTEGER})
    orderId: number;

    @ForeignKey(() => Meal)
    @Column({type: DataTypes.INTEGER})
    mealId: number;
}