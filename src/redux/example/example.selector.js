import { createSelector } from "reselect";

const selectExample = state => state.example;

export const selectExampleItems = createSelector(
    [selectExample], item => item.someValue
)