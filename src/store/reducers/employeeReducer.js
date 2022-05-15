import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  employees: [],
  employee: null,
};

const set_all_empls = createAction("SET_ALL_EMPL");
const set_employees = createAction("SET_EMPLOYE");

const employeeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(set_all_empls.type, (state, { payload }) => {
      state.employees = payload;
    })
    .addCase(set_employees.type, (state, { payload }) => {
      state.employee = payload;
    });
});

export const getEmployees = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:4000/employee", {
        query: "{\n\temployees{\n    name,\n    gender,\n    id\n  }\n}",
        variables: null,
      });
      dispatch(set_all_empls(data.data.employees));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getEmployee = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:4000/employee", {
        query: `{\n\temployee(id: ${id}){\n    name,\n    gender,\n    id\n  }\n}`,
        variables: null,
      });
      dispatch(set_employees(data.data.employee));
    } catch (error) {
      console.log(error);
    }
  };
};

export default employeeReducer;
