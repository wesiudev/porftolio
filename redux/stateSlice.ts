import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    currentImages:[],
    currentImage:-1
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setCurrentImages: (state, action: PayloadAction<any>) => {
        state.currentImages = action.payload;
    },
    setCurrentImageID: (state, action: PayloadAction<any>) => {
        state.currentImage = action.payload;
    }
  },
});

export const { setCurrentImages, setCurrentImageID } = stateSlice.actions;

export default stateSlice.reducer;