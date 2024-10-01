import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState: {},
    reducers: {
        cacheSuggestions: (state, action) => {
            state = Object.assign(state, action.payload);
        }
    }
});

export const { cacheSuggestions } = cacheSlice.actions;
export default cacheSlice.reducer;