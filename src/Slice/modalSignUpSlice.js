import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen:  false,
    auth:{
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
    },
  };

  
  const modalSignUpSlice = createSlice({
    name: 'SignUp',
    initialState,
    reducers: {
      openModal: (state) => {
        state.isOpen = true;
        localStorage.setItem('modalOpen', 'true');
      },
      closeModal: (state) => {
        state.isOpen = false;
        localStorage.setItem('modalOpen', 'false');
      },
      setEmail: (state, action) => {
        state.auth.email = action.payload;
      },
      setPassword: (state, action) => {
        state.auth.password = action.payload;
      },
      setFirstName: (state, action) => {
        state.auth.firstName = action.payload;
      },
      setLastName: (state, action) => {
        state.auth.lastName = action.payload;
      },
      setUserName: (state, action) => {
        state.auth.userName = action.payload;
      },
      
    },
  });

export const {
  openModal,
  closeModal,
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setUserName, } = modalSignUpSlice.actions;

  // Sélecteurs
export const selectAuthEmail = (state) => state.SignUp.auth.email;
export const selectAuthPassword = (state) => state.SignUp.auth.password;
export const selectAuthFirstName = (state) => state.SignUp.auth.firstName;
export const selectAuthLastName = (state) => state.SignUp.auth.lastName;
export const selectAuthUserName = (state) => state.SignUp.auth.userName;

export default modalSignUpSlice.reducer;