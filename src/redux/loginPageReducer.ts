const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const SHOW_PRELOADER = 'SHOW_PRELOADER'
const HIDE_PRELOADER = 'HIDE_PRELOADER'
const PASSWORD_RESET_CONFIRMED = 'PASSWORD_RESET_CONFIRMED'
const PASSWORD_RESET_FINISH = 'PASSWORD_RESET_FINISH'

export const RESET_PASSWORD = 'RESET_PASSWORD'
export const AUTHORIZE = 'AUTHORIZE'


const initialState = {
    isAuthorized: false,
    isPreloaderShown: false,
    isPasswordResetConfirmed: false
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

        case SHOW_PRELOADER:
            return {
                ...state,
                isPreloaderShown: true
            }
        case HIDE_PRELOADER:
            return {
                ...state,
                isPreloaderShown: false
            }
        case PASSWORD_RESET_CONFIRMED:
            return {
                ...state,
                isPasswordResetConfirmed: true
            }
        case PASSWORD_RESET_FINISH:
            return {
                ...state,
                isPasswordResetConfirmed: false
            }

        default: return state;
    }
}

type LogInType = { type: typeof LOG_IN }
export const logIn = (): LogInType => ({ type: LOG_IN })

type LogOutType = { type: typeof LOG_OUT }
export const logOut = (): LogOutType => ({ type: LOG_OUT })

type ShowPreloaderType = { type: typeof SHOW_PRELOADER }
export const showPreloader = (): ShowPreloaderType => ({ type: SHOW_PRELOADER })

type HidePreloaderType = { type: typeof HIDE_PRELOADER }
export const hidePreloader = (): HidePreloaderType => ({ type: HIDE_PRELOADER })


type PasswordResetConfirmedType = { type: typeof PASSWORD_RESET_CONFIRMED }
export const passwordResetConfirmed = (): PasswordResetConfirmedType => ({ type: PASSWORD_RESET_CONFIRMED });

type PasswordResetFinishType = { type: typeof PASSWORD_RESET_FINISH }
export const passwordResetFinish = (): PasswordResetFinishType => ({ type: PASSWORD_RESET_FINISH });




export type AuthorizeType = {
    type: typeof AUTHORIZE
    payload: {
        login: string
        password: string
    }
}
export const authorize = (login: string, password: string): AuthorizeType => ({ type: AUTHORIZE, payload: { login, password } });


export type ResetPasswordType = {
    type: typeof RESET_PASSWORD
    payload: {
        email: string
    }
}
export const resetPassword = (email: string): ResetPasswordType => ({ type: RESET_PASSWORD, payload: { email } });




