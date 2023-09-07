import {BelongsTo, BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {Ingredient} from "../Ingredients/ingredient.model";
import {MealsIngredients} from "./meals-ingredients.model";
import {Order} from "../orders/orders.model";
import {OrdersMeals} from "../orders/orders-meals.model";

interface MealCreationAttributes {
    readonly title: string;
    readonly description?: string;
    readonly image?: string;
    readonly price:number;

}

@Table({tableName: 'meal'})
export class Meal extends Model<Meal, MealCreationAttributes> {

    @Column({allowNull: false, unique: true, type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataTypes.STRING, allowNull: false})
    title: string;

    @Column({type: DataTypes.STRING})
    description: string;

    @BelongsToMany(() => Ingredient, () => MealsIngredients)
    ingredients: Ingredient[];

    @Column({type: DataTypes.INTEGER})
    fats: number;

    @Column({type: DataTypes.INTEGER})
    protein: number;

    @Column({type: DataTypes.INTEGER})
    carbohydrates: number;

    @Column({type: DataTypes.INTEGER})
    calories: number;

    @Column({type: DataTypes.INTEGER, allowNull:false})
    price: number;

    @Column({type: DataTypes.STRING})
    image: string;

    @BelongsToMany(()=>Order, ()=>OrdersMeals)
    orders:Order[];

}