export interface IngredientCreateDto {
   readonly title: string;
   readonly protein: number;
   readonly fats: number;
   readonly carbohydrates: number;
   readonly count?: number;
}