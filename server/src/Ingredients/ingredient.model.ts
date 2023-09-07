import {DataTypes} from "sequelize";
import {BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {Meal} from "../meals/meals.model";
import {MealsIngredients} from "../meals/meals-ingredients.model";

interface IngredientCreationAttributes {
   readonly title: string;
   readonly protein: number;
   readonly fats: number;
   readonly carbohydrates: number;
   readonly count?: number;
   readonly image?: string;
}

@Table({tableName: 'ingredients'})
export class Ingredient extends Model<Ingredient, IngredientCreationAttributes> {

    @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false})
    id: number;

    @Column({type: DataTypes.STRING, allowNull: false})
    title: string;

    @Column({type: DataTypes.INTEGER})
    protein: number;

    @Column({type: DataTypes.INTEGER})
    fats: number;

    @Column({type: DataTypes.INTEGER})
    carbohydrates: number;

    @Column({type: DataTypes.INTEGER})
    calories: number;

    @Column({type: DataTypes.INTEGER})
    count: number;

    @Column({type: DataTypes.STRING})
    image: string;

    @BelongsToMany(() => Meal, () => MealsIngredients)
    meals: Meal[];
}