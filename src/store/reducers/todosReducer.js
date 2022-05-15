import { createAction, createReducer } from "@reduxjs/toolkit";
import { giveMeId } from "utils/helpers";

const initialState = {
  todos: [],
  selected: null,
};

export const createToDo = createAction("CREATE");
export const editTodo = createAction("EDIT");
export const selectTodo = createAction("SELECT_TODO");
export const deleteTodo = createAction("DELETE_TODO");
export const toggleTodo = createAction("TOGGLE_TODO");

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createToDo.type, (state, { payload }) => {
      state.todos.push({
        id: giveMeId(),
        isComplete: false,
        title: payload,
      });
    })
    .addCase(editTodo.type, (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, ...payload };
        }
        return todo;
      });
    })
    .addCase(selectTodo.type, (state, { payload }) => {
      state.selected = state.todos.find((todo) => todo.id === payload) || null;
    })
    .addCase(deleteTodo.type, (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    })
    .addCase(toggleTodo.type, (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== payload) return todo;
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      });
    });
});

export default todosReducer;
