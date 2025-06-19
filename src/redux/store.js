import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './commonSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
    reducer: {
        common: commonReducer,
        favorites: favoritesReducer,
    },
});

export default store;
