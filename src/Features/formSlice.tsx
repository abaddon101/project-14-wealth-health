// formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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


const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    resetForm: (state) => initialState,
  },
});



export const { updateField, resetForm } = formSlice.actions;

export default formSlice.reducer;
