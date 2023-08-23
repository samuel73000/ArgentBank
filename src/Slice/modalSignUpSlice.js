import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  auth: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
};

const modalSignUpSlice = createSlice({
  name: "SignUp",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      localStorage.setItem("modalOpen", "true");
    },
    closeModal: (state) => {
      state.isOpen = false;
      localStorage.setItem("modalOpen", "false");
    },
    setAuthField: (state, action) => {
      const { field, value } = action.payload;
      if (field in state.auth) {
        state.auth[field] = value;
      }
    },
  },
});

export const { openModal, closeModal, setAuthField } = modalSignUpSlice.actions;

// Sélecteurs
export const selectAuthEmail = (state) => state.SignUp.auth.email;
export const selectAuthPassword = (state) => state.SignUp.auth.password;
export const selectAuthFirstName = (state) => state.SignUp.auth.firstName;
export const selectAuthLastName = (state) => state.SignUp.auth.lastName;
export const selectAuthUserName = (state) => state.SignUp.auth.userName;

export default modalSignUpSlice.reducer;
