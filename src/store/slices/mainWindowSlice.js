import { createSlice } from "@reduxjs/toolkit";


const mainWindowInfo = createSlice({
    name: "mainWindow",
    initialState: {
        projects: [],
        headers: [],
        techs: [],
        errors: [],
        loading: true,
        loadingMessage: "Esperando respuesta",
    },
    reducers: {
        setErrors: (state, action) => {state.errors = action.payload;
            return state;},
        addError: (state, action) => {state.errors.push(action.payload);
            return state;},
        addHeader: (state, action) => {state.headers.push(action.payload);
            return state;},
        setHeader: (state, action) => {state.headers = action.payload;
            return state;},
        addTech: (state, action) => {state.techs.push(action.payload);
            return state;},
        setTech: (state, action) => {state.techs = action.payload;
            return state;},
        setProjects: (state, action) => {state.projects = action.payload;
            return state;},
        addProject: (state, action) => {state.projects.push(action.payload);
            return state;},
        cleanErrors: (state) => {state.errors = new Array();
            return state;},
        start : (state) => {
            state.loading = true
            return state;
        },
        end : state => {state.loading = false;
            return state;},
        clear: state => {
            state.errors = new Array();
            state.headers = new Array();
            state.techs = new Array();
            state.projects = new Array();
        },
        setLoadingMessage: (state, action) => {
            state.loadingMessage = action.payload;
            return state;
        },
    }
});

export const { setErrors,
     addError,
     setHeader,
     start,
     end,
     setProjects,
     addProject,
     setTech,
     cleanErrors,
     addHeader,
     clear,
     setLoadingMessage,
     addTech } = mainWindowInfo.actions;

export default mainWindowInfo.reducer;