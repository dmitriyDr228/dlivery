import {User} from "../../types/types";

export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR'

}

interface FetchUsers {
    type: UsersActionTypes.FETCH_USERS
}

interface FetchUsersSuccess {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersError {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface FetchUser {
    type: UsersActionTypes.FETCH_USER;
    payload: any;
}

interface FetchUserError {
    type: UsersActionTypes.FETCH_USER_ERROR;
    payload: string;
}

export type UsersActions = FetchUser | FetchUsers | FetchUserError | FetchUsersSuccess | FetchUsersError;

interface OneUserState {
    readonly user: User | null;
    readonly error: string | null;
    readonly token: string | null;
}

const initialOneUserState: OneUserState = {
    user: null,
    error: null,
    token: null
}
export const oneUserReducer = (state = initialOneUserState, action: UsersActions)
    : OneUserState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USER:
            return {token: action.payload.token, user: action.payload.user, error: null};
        case UsersActionTypes.FETCH_USER_ERROR:
            return {token: null, error: action.payload, user: null}
        default:
            return state;
    }
}

interface UsersState {
    readonly users: User[];
    readonly error: string | null;
    readonly isLoading: boolean;
}

const initialUsersState: UsersState = {
    isLoading: false,
    users: [],
    error: null
}
export const usersReducer = (state = initialUsersState, action: UsersActions)
    : UsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return {isLoading: true, users: [], error: null};
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {error: action.payload, users: [], isLoading: false};
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {users: action.payload, isLoading: false, error: null};
        default:
            return state;
    }
}