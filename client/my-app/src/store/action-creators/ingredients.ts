import {Dispatch} from "redux";
import {IngredientAction, IngredientActionTypes} from "../reducers/ingredientReducer";
import {$host} from "../../http";

export const fetchIngredients = () => {
    return async (dispatch: Dispatch<IngredientAction>) => {
        dispatch({type: IngredientActionTypes.FETCH_INGREDIENTS})
        await $host.get('http://localhost:5000/ingredients')
            .then(response => {
                dispatch({
                    type: IngredientActionTypes.FETCH_INGREDIENTS_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: IngredientActionTypes.FETCH_INGREDIENTS_ERROR,
                    payload: 'Ошибка в загрузке ингредиентов'
                })
            })
    }
}
export const fetchIngredientById = (id: number) => {
    return async (dispatch: Dispatch<IngredientAction>) => {
        await $host.get('http://localhost:5000/ingredients/' + id)
            .then(response => {
                dispatch({
                    type: IngredientActionTypes.FETCH_INGREDIENT,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: IngredientActionTypes.FETCH_INGREDIENT_ERROR,
                    payload: 'Ошибка в загрузке продукта'
                })
            })
    }
}