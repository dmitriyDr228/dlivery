import {Meal} from "../../types/types";


export enum MealsActionTypes {
    FETCH_MEALS = 'FETCH_MEALS',
    FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS',
    FETCH_MEALS_ERROR = 'FETCH_MEALS_ERROR',
    FETCH_MEAL = 'FETCH_MEAL',
    FETCH_MEAL_ERROR = 'FETCH_MEAL_ERROR'

}

interface FetchMeals {
    type: MealsActionTypes.FETCH_MEALS;
}

interface FetchMealsSuccess {
    type: MealsActionTypes.FETCH_MEALS_SUCCESS;
    payload: any[];
}

interface FetchMealsError {
    type: MealsActionTypes.FETCH_MEALS_ERROR;
    payload: string;
}

interface FetchMeal {
    type: MealsActionTypes.FETCH_MEAL;
    payload: any;
}

interface FetchMealError {
    type: MealsActionTypes.FETCH_MEAL_ERROR;
    payload: string;
}

export type MealsAction =
    FetchMeal
    | FetchMealError
    | FetchMealsError
    | FetchMeals
    | FetchMealsSuccess;

interface MealsState {
    readonly meals: Meal[];
    readonly error: string | null;
    readonly isLoading: boolean;
}

const initialMealState: MealsState = {
    meals: [],
    isLoading: false,
    error: null,

}
export const mealsReducer = (state = initialMealState, action: MealsAction): MealsState => {
    switch (action.type) {
        case MealsActionTypes.FETCH_MEALS:
            return {error: null, meals: [], isLoading: true};
        case MealsActionTypes.FETCH_MEALS_SUCCESS:
            return {error: null, meals: action.payload, isLoading: false};
        case MealsActionTypes.FETCH_MEAL_ERROR:
            return {error: action.payload, isLoading: false, meals: []};
        default:
            return state;
    }
}

interface OneMealState {
    readonly meal: Meal | null;
    readonly error: string | null;
}

const initialOneMealState: OneMealState = {
    error: null,
    meal: null
}
export const oneMealReducer = (state = initialOneMealState, action: MealsAction)
    : OneMealState => {
    switch (action.type) {
        case MealsActionTypes.FETCH_MEAL:
            return {meal: action.payload, error: null};
        case MealsActionTypes.FETCH_MEAL_ERROR:
            return {meal: null, error: action.payload};
        default:
            return state;
    }
}