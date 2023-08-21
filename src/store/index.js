import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga'
import projectReducer from "./slices/proyectoSlice"
import rootSaga from './sagas';
import hellowSlice from './slices/hellowSlice';
import mainWindowSlice from './slices/mainWindowSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        project: projectReducer,
        saludo: hellowSlice,
        mainWindow: mainWindowSlice,
    },
    middleware: [ sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
