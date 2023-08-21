import { all } from "redux-saga/effects";
import { proyectSaga } from "./proyectSaga";
import { helloSaga } from "./helloSaga";
import { mainWindowSaga } from "./mainWindowSaga";

function* rootSaga(){
    yield all([
        ...proyectSaga,
        ...helloSaga,
        ...mainWindowSaga
    ])
}


export default rootSaga;