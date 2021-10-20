import { createSlice } from "@reduxjs/toolkit";


const PageSlice = createSlice({
    name: 'page',
    initialState: 1,
    reducers: {
        setPage: (state, action) => {
            state = action.payload;
            return state;
        },
    }
})


const {reducer, actions} = PageSlice;
export const {setPage} = actions;
export default reducer;