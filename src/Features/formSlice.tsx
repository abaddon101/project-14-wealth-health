// formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the form state
export interface FormState {
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

// Define the initial state for the form slice
const initialState: FormState = {
  firstName: "",
  lastName: "",
  dateOfBirth: 0,
  startDate: 0,
  street: "",
  city: "",
  stateCountry: "",
  zipCode: 0,
  departments: "",
};

// Create the form slice using createSlice from Redux Toolkit
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // Reducer to update a specific field in the form state
    updateField: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    // Reducer to reset the form state to its initial values
    resetForm: (state) => initialState,
  },
});

// Export the action creators and reducer
export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
