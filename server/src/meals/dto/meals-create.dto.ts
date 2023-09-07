export interface MealsCreateDto {
    readonly title: string;
    readonly description?: string;
    readonly titleIngredients: string[];
    readonly price:number;
}