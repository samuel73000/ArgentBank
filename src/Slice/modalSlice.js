import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // localStorage.getItem('modalOpen') === 'true' ||
    isOpen:  false,
    auth:{
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
    },
  };

  
  const modalSlice = createSlice({
    name: 'modal',
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
  setUserName, } = modalSlice.actions;

  // Sélecteurs
export const selectAuthEmail = (state) => state.modal.auth.email;
export const selectAuthPassword = (state) => state.modal.auth.password;
export const selectAuthFirstName = (state) => state.modal.auth.firstName;
export const selectAuthLastName = (state) => state.modal.auth.lastName;
export const selectAuthUserName = (state) => state.modal.auth.userName;

export default modalSlice.reducer;