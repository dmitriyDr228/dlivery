import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {Ingredient} from "../Ingredients/ingredient.model";
import {Meal} from "./meals.model";

@Table({tableName: 'meals_ingredients', updatedAt: false, createdAt: false})
export class MealsIngredients extends Model<MealsIngredients> {

    @Column({type: DataTypes.INTEGER, autoIncrement: true, unique: true, primaryKey: true, allowNull: false})
    id: number;

    @Column({type: DataTypes.INTEGER})
    @ForeignKey(() => Ingredient)
    ingredientId: number;

    @Column({type: DataTypes.INTEGER})
    @ForeignKey(() => Meal)
    mealId: number;
}