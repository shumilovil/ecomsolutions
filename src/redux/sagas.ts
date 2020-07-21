import { takeEvery, put, call } from 'redux-saga/effects'
import { AUTHORIZE, logIn, showPreloader, hidePreloader, RESET_PASSWORD, ResetPasswordType, passwordResetConfirmed } from './loginPageReducer'
import { AuthorizeType } from './loginPageReducer'

export function* sagaWatcher() {
  yield takeEvery(AUTHORIZE, sagaWorkerAuthorization)
  yield takeEvery(RESET_PASSWORD, sagaWorkerResetPassword)
}


function* sagaWorkerAuthorization(action: AuthorizeType) {
  yield put(showPreloader())
  yield call(fakeAuthorization, action.payload.login, action.payload.password)
  yield put(logIn())
  yield put(hidePreloader())  
}

function* sagaWorkerResetPassword(action: ResetPasswordType) {
  yield put(showPreloader())
  yield call(fakeResetPassword, action.payload.email)
  yield put(passwordResetConfirmed())  
  yield put(hidePreloader())  
}




async function fakeAuthorization(login: string, password: string) {
  await fetch('https://fakeurl',
    {
      method: 'POST',
      body: JSON.stringify({ login: login, password: password })
    })
    .catch(() => { console.log('Fake authorization is complete') })
}

async function fakeResetPassword(email: string) {
  await fetch('https://fakeurl',
    {
      method: 'POST',
      body: JSON.stringify({ email: email})
    })
    .catch(() => { console.log('Fake password reset is complete') })
}





