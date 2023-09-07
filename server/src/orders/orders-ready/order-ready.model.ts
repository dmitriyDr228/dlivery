import {BelongsTo, Column, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {Order} from "../orders.model";

interface OrdersCreationAttributes {
    readonly value: string;
    readonly description: string;
}

@Table({tableName: 'order_ready', createdAt: false, updatedAt: false})
export class OrderReady extends Model<OrderReady, OrdersCreationAttributes> {

    @Column({type: DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataTypes.STRING, unique: true, allowNull: false})
    value: string;

    @Column({type: DataTypes.STRING, allowNull: false})
    description: string;

    @ForeignKey(() => Order)
    @Column
    orderId: number;

    @BelongsTo(() => Order)
    order: Order;
}