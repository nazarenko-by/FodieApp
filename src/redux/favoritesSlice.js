import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const recipe = action.payload;
            const isFavorite = state.favoriterecipes.includes(recipe.idFood);
            if (isFavorite) {
                state.favoriterecipes = state.favoriterecipes.filter((id) => id !== recipe.idFood);
            } else {
                state.favoriterecipes.push(recipe.idFood);
            }
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
