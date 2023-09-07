export interface Ingredient {
    readonly id: number;
    readonly title: string;
    readonly protein: number;
    readonly fats: number;
    readonly carbohydrates: number;
    readonly calories: number;
    readonly count?: number;
    readonly image?: string;
}

export interface User {
    readonly id: number;
    readonly email: string;
    readonly password: string;
    readonly address: string;
    readonly number: number;
    readonly FIO: string;
    readonly roles: Role[];

}

export interface Role {
    readonly id: number;
    readonly value: string;
    readonly description: string;
}

export interface Meal {
    readonly id:number;
    readonly title: string;
    readonly description?: string;
    readonly titleIngredients: string[];
    readonly price:number;
    readonly ingredients: Ingredient[];
}

export interface Order {
    readonly id:number;
    readonly userEmail?: string;
    readonly addressUser: string;
    readonly number: bigint;
    readonly meals: Meal[];
    readonly description?: string;
}