import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import portfolioReducer from "./features/Portfolio/portfolioSlice";
import { portfolioSaga } from "./features/Portfolio/portfolioSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(portfolioSaga);

export default store;