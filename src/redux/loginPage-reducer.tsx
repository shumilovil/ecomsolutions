const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';


const initialState = {
    isAuthorized: false
}

export const loginPageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isAuthorized: true
            }
        case LOG_OUT:
            return {
                ...state,
                isAuthorized: false
            }
        default: return state;
    }
}

type LogInType = {
    type: typeof LOG_IN
}

export const logIn = (): LogInType => ({ type: LOG_IN });

type LogOutType = {
    type: typeof LOG_OUT
}

export const logOut = ():LogOutType => ({ type: LOG_OUT });