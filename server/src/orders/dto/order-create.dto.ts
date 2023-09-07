import {Meal} from "../../meals/meals.model";

export interface OrderCreateDto {
    readonly userEmail?: string;
    readonly addressUser: string;
    readonly number: bigint;
    readonly mealsTitle: string[];
    readonly description?: string;

}
