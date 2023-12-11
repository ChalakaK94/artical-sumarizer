import {configureStore} from "@reduxjs/toolkit";
import {articleAPi} from "./article.js";

export const store = configureStore({
    reducer:{
        [articleAPi.reducerPath]: articleAPi.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(articleAPi.middleware)
})
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;