import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/AsyncActions';


//GENERAR WATCHER SAGA
//ESCUCHAR API_CALL_REQUEST ACION

export function* watcherSaga() {
    //ESCUCHAR ACCION Y EMPEZAR UNA SAGA
    yield takeLatest(API_CALL_REQUEST, workerSaga)
} 


//CREAR WORKER SAGA 
// NOS PERMITE EL LLAMADO DESDE WATCHER SAGA, HACE EL LOGIN
// Y DESPACHA UNA ACCIÓN

export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request))
        //OBTENER TOKEN DE RESPUESTA
        const token = response.data.token;
        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: error
            }
        });
    }
} 

function fetchHttp(request) {
    return function(){
        return(axios(request))
    }
}
