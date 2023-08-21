import { call, fork, put, takeLatest } from "redux-saga/effects";
import { ProyectoCaller } from "../../callers/proyecto";
import { getMedia } from "../../callers/media";
import { addError, addHeader, addTech, end, setLoadingMessage, setProjects, start } from "../slices/mainWindowSlice";
import { TechCaller } from "../../callers/tech";

export const RUN_MAIN_WINDOW = "RUN_MAIN";

function* initMain(){
    yield put(start());
    yield put(setLoadingMessage("Descargando datos"));
    const projects =  yield call(ProyectoCaller.listAll);
    yield put(setProjects(projects));
    yield put(setLoadingMessage("Procesando los proyectos"));
    for(let i = 0; i < projects.length; i++){
        const project = projects[i];
        const header = project?.acf?.imagen_cabecera;
        const techs = project?.acf?.p_tecnologias;
        if(header){
            yield put(setLoadingMessage("Asignando imagen de cabecera"));
            const img = yield call(getMedia, header);
            yield put(addHeader(img));
        }
        if(techs.length > 0){
            yield put(setLoadingMessage("Descargando datos del proyecto"));
            for(let techI = 0; techI < techs.length; techI++){
                const id = techs[techI];
                const tech = yield call(TechCaller.getOne, id);
                if(tech){
                    yield put(addTech(tech));
                }
            }
        }

    }
    if(projects.length == 0){
        yield put(addError({level: "low", message: "No hay proyectos"}));
    }
    yield put(end());
}

function* wathcher4MainWindow(){
    yield takeLatest(RUN_MAIN_WINDOW, initMain);
}

export const mainWindowSaga = [fork(wathcher4MainWindow)];
