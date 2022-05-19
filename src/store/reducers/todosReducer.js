import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  selected: null,
};

export const createToDo = createAction("CREATE");
export const editTodo = createAction("EDIT");
export const selectTodo = createAction("SELECT_TODO");
export const deleteTodo = createAction("DELETE_TODO");
export const toggleTodo = createAction("TOGGLE_TODO");

// Builder Notation

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createToDo, (state, { payload }) => {
      state.todos.push({
        id: nanoid(),
        isComplete: false,
        title: payload,
      });
    })
    .addCase(selectTodo, (state, { payload }) => {
      state.selected =
        payload === null ? null : { ...state.todos[payload], index: payload };
    })
    .addCase(editTodo, (state, { payload }) => {
      state.todos[payload.index]["title"] = payload.title;
    })
    .addCase(deleteTodo, (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    })
    .addCase(toggleTodo, (state, { payload }) => {
      state.todos[payload]["isComplete"] = !state.todos[payload]["isComplete"];
    });
});

// Map Notation

// const todosReducer = createReducer(initialState, {
//   [createToDo]: (state, { payload }) => {
//     state.todos.push({
//       id: nanoid(),
//       isComplete: false,
//       title: payload,
//     });
//   },
//   [selectTodo]: (state, { payload }) => {
//     state.selected =
//       payload === null ? null : { ...state.todos[payload], index: payload };
//   },
//   [editTodo]: (state, { payload }) => {
//     state.todos[payload.index]["title"] = payload.title;
//   },
//   [deleteTodo]: (state, { payload }) => {
//     state.todos = state.todos.filter((todo) => todo.id !== payload);
//   },
//   [toggleTodo]: (state, { payload }) => {
//     state.todos[payload]["isComplete"] = !state.todos[payload]["isComplete"];
//   },
// });

export default todosReducer;
