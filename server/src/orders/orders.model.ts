import {BelongsToMany, Column, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {OrderReady} from "./orders-ready/order-ready.model";
import {Meal} from "../meals/meals.model";
import {OrdersMeals} from "./orders-meals.model";

interface OrderCreationAttributes {
    readonly userEmail?: string;
    readonly addressUser: string;
    readonly number: bigint;
    readonly description?: string;

}

@Table({tableName: 'orders'})
export class Order extends Model<Order, OrderCreationAttributes> {

    @Column({type: DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataTypes.STRING, allowNull: true})
    userEmail: string;

    @Column({type: DataTypes.STRING, allowNull: false})
    addressUser: string;

    @Column({type: DataTypes.BIGINT, allowNull: false})
    number: bigint;

    @Column({type: DataTypes.INTEGER, defaultValue:0})
    price: number;

    @Column({type: DataTypes.STRING, allowNull: true})
    description: string;

    @HasOne(() => OrderReady)
    status: OrderReady;

    @BelongsToMany(() => Meal, () => OrdersMeals)
    meals: Meal[];
}