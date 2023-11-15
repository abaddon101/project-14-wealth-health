import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: number;
    startDate: number;
    street: string;
    city: string;
    stateCountry: string;
    zipCode: number;
    departments: string;
  }
  interface EmployeesState {
    list: Employee[];
  }

  const initialEmployeesState: EmployeesState = {
    list: [],
  };

  const employeesSlice = createSlice({
    name: "employees",
    initialState: initialEmployeesState,
    reducers: {
      addEmployee: (state, action: PayloadAction<Employee>) => {
        state.list.push(action.payload);
      },
      // Ajoutez d'autres reducers si nécessaire
    },
  });

  export const { addEmployee } = employeesSlice.actions;
  export default employeesSlice.reducer;