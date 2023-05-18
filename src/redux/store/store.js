import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../features/rootReducer";
import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
            },
        }),
});

// export const store = configureStore({
//     reducer: rootReducer,
// });
