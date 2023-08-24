import { call, fork, put, select, takeEvery } from "redux-saga/effects"
import { fetchProjectsFailure, fetchProjectsSuccess, fetchProyectStart } from "../slices/proyectoSlice"
import urlJoin from "url-join";
import constants from "../../utils/constants";
import { ProyectoCaller } from "../../callers/proyecto";
import { getMedia } from "../../callers/media";
import { TechCaller } from "../../callers/tech";

export const FETCH_PROJECT = "FETCH_PROJECT";

async function getProjects() {
    const response = await fetch(urlJoin(constants.wpApi.host, constants.wpApi.base, constants.wpApi.endpoints.proyecto));
    return response.json();
}
// creamos un funcion de procesado: realiza acciones mietnras actualiza el store
export function* fetchProjects(action) {
    try {
        const loading = yield select(state => state.project);
        // console.log(loading)
        if(loading.loading) return;
        yield put(fetchProyectStart());
        const response = yield call(ProyectoCaller.getOne, action.payload);
        if (response.failed == true) {
            yield put(fetchProjectsFailure(response.error.message));
            return;
        } else {
            const fields = response?.acf;
            const hasGaleria = fields.has_galeria_de_imagenes == '' || fields.has_galeria_de_imagenes[0] == 'true';
            const hasVideo = fields.has_video != '' || fields.has_video[0] == 'true';
            const techsId = fields.p_tecnologias;
            response.header = yield call(getMedia, fields.imagen_cabecera);
            if (hasGaleria) {
                const ids = fields.galeria.split(";");
                response.galery = new Array();
                for (let index = 0; index < ids.length; index++) {
                    const id = ids[index];
                    const media = yield call(getMedia, id);
                    response.galery.push(media);
                }
            }
            if (hasVideo) {
                response.video = yield call(getMedia, fields.video);
            }
            if (techsId.length > 0) {
                response.techs = new Array();
                for (let i = 0; i < techsId.length; i++) {
                    const id = techsId[i];
                    const tech = yield call(TechCaller.getOne, id);
                    response.techs.push(tech);
                }
            }
            console.log(response);
            yield put(fetchProjectsSuccess(response))
        }
    } catch (error) {
        yield put(fetchProjectsFailure(error.message));
    }
}

// asignamos un identificador en el store al action
function* watchFetchProjectsfn() {
    yield takeEvery(FETCH_PROJECT, fetchProjects);
}

export const proyectSaga = [fork(watchFetchProjectsfn)];