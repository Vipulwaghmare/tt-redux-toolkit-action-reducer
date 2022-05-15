import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = 0;

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment.type, (state, action) => state + 1)
    .addCase(decrement.toString(), (state, action) => state - 1);
});

export default counterReducer;
