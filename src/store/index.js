import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./reducers/counterReducer";
import employeeReducer from "./reducers/employeeReducer";
import todosReducer from "./reducers/todosReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddlewares) => [...getDefaultMiddlewares(), logger],
});

export default store;
