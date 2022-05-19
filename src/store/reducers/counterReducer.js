import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = 0;

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

/** 
  Builder Method Notation 
**/

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => state + 1)
    .addCase(decrement, (state, action) => state - 1);
});

/** 
  Map Object Notation
**/

// const counterReducer = createReducer(initialState, {
//   [increment]: (state, action) => state + 1,
//   [decrement]: (state, action) => state - 1,
// });

export default counterReducer;
