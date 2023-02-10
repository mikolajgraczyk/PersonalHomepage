import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        repos: [],
        loadingStatus: "loading",
    },
    reducers: {
        setRepos: (state, { payload: repos }) => {
            state.repos = repos;
        },
        setLoadingToSuccess: state => {
            state.loadingStatus = "success";
        },
        setLoadingToFail: state => {
            state.loadingStatus = "fail";
        },
    },
});

export const { setLoadingToSuccess, setLoadingToFail, setRepos } = portfolioSlice.actions;
export const selectPortfolioState = state => state.portfolio;
export const selectRepos = state => selectPortfolioState(state).repos;
export const selectLoadingStatus = state => selectPortfolioState(state).loadingStatus;
export default portfolioSlice.reducer;