import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: localStorage.getItem('modalOpen') === 'true' || false,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
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
        state.email = action.payload;
      },
      setPassword: (state, action) => {
        state.password = action.payload;
      },
      setFirstName: (state, action) => {
        state.firstName= action.payload;
      },
      setLastName: (state, action) => {
        state.lastName = action.payload;
      },
      setUserName: (state, action) => {
        state.userName = action.payload;
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

export default modalSlice.reducer;