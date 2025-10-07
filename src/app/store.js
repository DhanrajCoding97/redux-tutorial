//create store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice' //import the reducer
import postsReducer from './features/posts/postSlice'
export const store = configureStore({
    reducer: {
        counter : counterReducer,
        posts: postsReducer
    },
})