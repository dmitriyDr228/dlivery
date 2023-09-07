import {Order} from "../../types/types";

export enum OrdersActionTypes {
    FETCH_ORDERS = 'FETCH_ORDERS',
    FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS',
    FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR',
    FETCH_ORDER = 'FETCH_ORDER',
    FETCH_ORDER_ERROR = 'FETCH_ORDER_ERROR'

}

interface FetchOrders {
    type: OrdersActionTypes.FETCH_ORDERS
}

interface FetchOrdersError {
    type: OrdersActionTypes.FETCH_ORDERS_ERROR;
    payload: string;
}

interface FetchOrdersSuccess {
    type: OrdersActionTypes.FETCH_ORDERS_SUCCESS;
    payload: any[];
}

interface FetchOrder {
    type: OrdersActionTypes.FETCH_ORDER;
    payload: any;
}

interface FetchOrderError {
    type: OrdersActionTypes.FETCH_ORDER_ERROR;
    payload: string;
}

export type OrdersAction = FetchOrder | FetchOrders | FetchOrderError | FetchOrdersError | FetchOrdersSuccess;

interface OrdersState {
    readonly orders: Order[];
    readonly error: string | null;
    readonly isLoading: boolean;
}

const initialOrdersState: OrdersState = {
    orders: [],
    error: null,
    isLoading: false
}
export const ordersReducer = (state = initialOrdersState, action: OrdersAction)
    : OrdersState => {
    switch (action.type) {
        case OrdersActionTypes.FETCH_ORDERS:
            return {orders: [], error: null, isLoading: true};
        case OrdersActionTypes.FETCH_ORDERS_ERROR:
            return {orders: [], error: action.payload, isLoading: false};
        case OrdersActionTypes.FETCH_ORDERS_SUCCESS:
            return {orders: action.payload, isLoading: false, error: null};
        default:
            return state;
    }
}

interface OneOrderState {
    readonly order: Order | null;
    readonly error: string | null;
}

const initialOneOrderState: OneOrderState = {
    order: null,
    error: null
}
export const oneOrderReducer = (state = initialOneOrderState, action: OrdersAction)
    : OneOrderState => {
    switch (action.type) {
        case OrdersActionTypes.FETCH_ORDER:
            return {order: action.payload, error: null};
        case OrdersActionTypes.FETCH_ORDER_ERROR:
            return {order: null, error: action.payload};
        default:
            return state;
    }
}
