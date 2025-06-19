import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_FOOD } from '../helper/const';

const initialState = {
    recipes: DEFAULT_FOOD,
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        toggleRecipes: (state, action) => {
            const recip = action.payload;
            const isAdded = state.recipes.some((i) => i.idCategory === recip.idCategory);
            if (isAdded) {
                state.recipes = state.recipes.filter((id) => id !== recip.idCategory);
            } else {
                state.recipes.push(recip);
            }
        },
    },
});

export const { toggleRecipes } = commonSlice.actions;
export default commonSlice.reducer;
