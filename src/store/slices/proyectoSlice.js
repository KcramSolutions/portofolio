import { createSlice } from "@reduxjs/toolkit";


const proyectoSlice = createSlice({
    name: 'project',
    initialState: {
        data: [],
        loading: true,
        error: false,
        hasError: false
    },
    reducers: {
        fetchProyectStart: (state) => {
            state.loading = true;
            state.error = null;
            state.hasError = false;

        },
        fetchProjectsSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
            state.hasError = false;

          },
          fetchProjectsFailure: (state, action) => {
            state.loading = false;
            state.hasError = true;
            state.error = action.payload;
          }
    }
})

export const {  
    fetchProjectsFailure,
    fetchProjectsSuccess,
    fetchProyectStart
} = proyectoSlice.actions;

export default proyectoSlice.reducer;