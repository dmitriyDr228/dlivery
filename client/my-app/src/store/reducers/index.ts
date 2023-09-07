import {combineReducers} from "redux";
import {ingredientsReducer, oneIngredientReducer} from "./ingredientReducer";
import {mealsReducer, oneMealReducer} from "./mealsReducer";
import {oneOrderReducer, ordersReducer} from "./ordersReducer";
import {oneUserReducer, usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    oneIngredient: oneIngredientReducer,
    meals: mealsReducer,
    oneMeal: oneMealReducer,
    orders: ordersReducer,
    oneOrder: oneOrderReducer,
    users: usersReducer,
    user: oneUserReducer

});

export type RootState = ReturnType<typeof rootReducer>