import { fork, put, takeLatest } from "redux-saga/effects";
import { saludo, startLoading } from "../slices/hellowSlice";

export const SALUDO_SET = "SALUDO_KCS";

export function* loadMessage(){
    yield put(startLoading());
    yield put(saludo("Hola"));
    console.log("Creado saludo");
}

function* watcher(){
    yield takeLatest(SALUDO_SET, loadMessage);
}

export const helloSaga = [fork(watcher)];