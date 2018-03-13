import * as types from './actionTypes';

export function userLoading () {
    return {
        type:types.LOADING_USER
    }
}

export function currentUser (user) {
    return {
        type:types.CURRENT_USER,
        payload:user
    }
}

export function createUser (user) {
    return {
        type:types.CREATE_USER,
        payload:user
    }
}

export function updateUser (user) {
    return {
        type:types.UPDATE_USER,
        payload:{user}
    }
}

export function deleteUser (user) {
    return {
        type:types.DELETE_USER,
        payload:user
    }
}
