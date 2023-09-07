import {Ingredient} from "../../types/types";

interface IngredientState {
    readonly ingredients: Ingredient[];
    readonly error: string | null;
    readonly isLoading: boolean;
}

const initialStateIngredient: IngredientState = {
    error: null,
    ingredients: [],
    isLoading: false,
}

export enum IngredientActionTypes {
    FETCH_INGREDIENTS = 'FETCH_INGREDIENTS',
    FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS',
    FETCH_INGREDIENTS_ERROR = 'FETCH_INGREDIENTS_ERROR',
    FETCH_INGREDIENT = 'FETCH_INGREDIENT',
    FETCH_INGREDIENT_ERROR = 'FETCH_INGREDIENT_ERROR'

}

interface FetchIngredients {
    type: IngredientActionTypes.FETCH_INGREDIENTS;
}

interface FetchIngredientsSuccess {
    type: IngredientActionTypes.FETCH_INGREDIENTS_SUCCESS;
    payload: any[];
}

interface FetchIngredientsError {
    type: IngredientActionTypes.FETCH_INGREDIENTS_ERROR;
    payload: string;
}

interface FetchIngredient {
    type: IngredientActionTypes.FETCH_INGREDIENT;
    payload: any;
}

interface FetchIngredientError {
    type: IngredientActionTypes.FETCH_INGREDIENT_ERROR;
    payload: string;
}


export type IngredientAction =
    FetchIngredient
    | FetchIngredientError
    | FetchIngredientsError
    | FetchIngredientsSuccess
    | FetchIngredients;
export const ingredientsReducer = (state = initialStateIngredient, action: IngredientAction)
    : IngredientState => {
    switch (action.type) {
        case IngredientActionTypes.FETCH_INGREDIENTS:
            return {ingredients: [], isLoading: true, error: null};
        case IngredientActionTypes.FETCH_INGREDIENTS_ERROR:
            return {ingredients: [], isLoading: false, error: action.payload};
        case IngredientActionTypes.FETCH_INGREDIENTS_SUCCESS:
            return {ingredients: action.payload, error: null, isLoading: false};
        default:
            return state;
    }
}

interface OneIngredientState {
    readonly ingredient: Ingredient | null;
    readonly error: string | null;
}

const initialStateOneIngredient: OneIngredientState = {
    ingredient: null,
    error: null,
}
export const oneIngredientReducer = (state = initialStateOneIngredient, action: IngredientAction)
    : OneIngredientState => {
    switch (action.type) {
        case IngredientActionTypes.FETCH_INGREDIENT:
            return {ingredient: action.payload, error: null};
        case IngredientActionTypes.FETCH_INGREDIENT_ERROR:
            return {ingredient: null, error: action.payload};
        default:
            return state;
    }
}