import {Dispatch} from "redux";
import {OrdersAction, OrdersActionTypes} from "../reducers/ordersReducer";
import {$host} from "../../http";

export const fetchOrders = () => {
    return async (dispatch: Dispatch<OrdersAction>) => {
        dispatch({type: OrdersActionTypes.FETCH_ORDERS})
        await $host.get('http://localhost:5000/orders')
            .then(response => {
                dispatch({
                    type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: OrdersActionTypes.FETCH_ORDERS_ERROR,
                    payload: 'Ошибка в загрузке заказов'
                })
            })
    }
}
export const fetchOneOrderById = (id: number) => {
    return async (dispatch: Dispatch<OrdersAction>) => {
        await $host.get('http://localhost:5000/orders/' + id)
            .then(response => {
                dispatch({
                    type: OrdersActionTypes.FETCH_ORDER,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: OrdersActionTypes.FETCH_ORDER_ERROR,
                    payload: 'Ошибка в загрузке заказа'
                })
            })
    }
}
export const fetchOrdersByUserEmail = (userEmail: string) => {
    return async (dispatch: Dispatch<OrdersAction>) => {
        dispatch({type: OrdersActionTypes.FETCH_ORDERS})
        await $host.get('http://localhost:5000/orders/' + userEmail)
            .then(response => {
                dispatch({
                    type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: OrdersActionTypes.FETCH_ORDERS_ERROR,
                    payload: 'Ошибка в загрузке заказов пользователя'
                })
            })
    }
}