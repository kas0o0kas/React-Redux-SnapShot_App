import { createSlice } from "@reduxjs/toolkit";



const PhotoSlice = createSlice({
    name: 'photo',
    initialState: '',
    reducers: {
        loadPhotoSearch: (state, action) => {
            state = action.payload;
            console.log('querySearch',state);
            return state;
        }, loadPhotoSuggess: (state, action) => {
            state = action.payload;
            console.log('querySuggess',state);
            return state;
        }
    }
})

const {reducer, actions} = PhotoSlice;
export const {loadPhotoSearch, loadPhotoSuggess} = actions;
export default reducer;