// store.ts
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import employeesReducer from "./employeeSlice";

// Configure the Redux store with form and employees reducers
export const store = configureStore({
  reducer: {
    form: formReducer,
    employees: employeesReducer,
  },
});

// Define types for RootState and AppDispatch based on the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
