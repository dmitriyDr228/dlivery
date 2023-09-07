import {Dispatch} from "redux";
import {MealsAction, MealsActionTypes} from "../reducers/mealsReducer";
import {$host} from "../../http";

export const fetchMeals = () => {
    return async (dispatch: Dispatch<MealsAction>) => {
        dispatch({type: MealsActionTypes.FETCH_MEALS})
        await $host.get('http://localhost:5000/meals')
            .then(response => {
                dispatch({
                    type: MealsActionTypes.FETCH_MEALS_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: MealsActionTypes.FETCH_MEALS_ERROR,
                    payload: 'Ошибка в загрузке блюд'
                })
            })
    }
}
export const fetchMealById = (id: string) => {
    return async (dispatch: Dispatch<MealsAction>) => {
        await $host.get('http://localhost:5000/meals/' + id)
            .then(response => {
                dispatch({
                    type: MealsActionTypes.FETCH_MEAL,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: MealsActionTypes.FETCH_MEAL_ERROR,
                    payload: 'Ошибка в загрузке блюда'
                })
            })
    }
}