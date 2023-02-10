import { call, put, delay } from "redux-saga/effects";
import { getReposFromAPI } from "./getReposFromAPI";
import { setLoadingToFail, setLoadingToSuccess, setRepos } from "./portfolioSlice";

function* fetchReposHandler() {
    try {
        const repos = yield call(getReposFromAPI);
        yield put(setRepos(repos));
        yield delay(1000);
        yield put(setLoadingToSuccess());
    } catch (error) {
        yield delay(1000);
        yield put(setLoadingToFail());
    }
};

export function* portfolioSaga() {
    yield call(fetchReposHandler);
};