import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import employeesReducer from "./employeeSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
