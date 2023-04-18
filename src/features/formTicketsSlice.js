import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formTickets",
  initialState: {
    name: "",
    status: false,
    formData: {
      status: false,
      from: { date: null, city: { _id: "", name: "" } },
      to: { date: null, city: { _id: "", name: "" } },
    },

  },
  reducers: {
    inputValue: (state, action) => {
      const { name } = action.payload;

      const value = state.name === name ? state.name : name;
      state.name = value;
    },
    setForm: (state, action) => {
      const { type, data,  status } = action.payload;
      if (type === "startCity") state.formData.from.city = data;
      if (type === "finishCity") state.formData.to.city = data;
      if (type === "startDate") state.formData.from.date = data;
      if (type === "finishDate") state.formData.to.date = data;
      state.formData.status = status;

    },


  },
});

export const { inputValue, setForm } =
  formSlice.actions;

export default formSlice.reducer;
