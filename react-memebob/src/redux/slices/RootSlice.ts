import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        image_source: "Image Source",
        meme_text: "Meme Text",
    },
    reducers: {
        chooseImage: (state, action) => {state.image_source = action.payload},
        chooseText: (state, action) => { state.meme_text = action.payload},
    }
});

export const reducer = rootSlice.reducer;
export const { chooseImage, chooseText } = rootSlice.actions;