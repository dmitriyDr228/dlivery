import {Dispatch} from "redux";
import {UsersActions, UsersActionTypes} from "../reducers/usersReducer";
import {$host} from "../../http";

interface LoginDto {
    readonly email: string;
    readonly password: string;
}

export const login = (data: LoginDto) => {
    return async (dispatch: Dispatch<UsersActions>) => {
        await $host.post('http://localhost:5000/auth/login', data)
            .then(response => {
                dispatch({
                    type: UsersActionTypes.FETCH_USER,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: UsersActionTypes.FETCH_USER_ERROR,
                    payload: error.data
                })
            })

    }
}