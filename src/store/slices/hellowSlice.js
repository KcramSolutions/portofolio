import { createSlice } from "@reduxjs/toolkit";


const helloSlice = createSlice({
    name: "hello",
    initialState: {
        type: "",
        message: "",
        loading: false
    },
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        endLoading: (state) => {
            state.loading = false;
        },
        saludo: (state, action) =>{
            console.log(action);
            state.message = action.payload;
            state.type = "saludo";
        }
    }
});

export const {endLoading, saludo, startLoading} = helloSlice.actions;

export default helloSlice.reducer;