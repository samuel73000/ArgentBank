import { createSlice } from "@reduxjs/toolkit";

const modalEditNameSlice = createSlice({
  name: "modalEditName",
  initialState: {
    showEditButton: true,
    showModal: false,
    showWelcomeMessage: true,
    userData: {
      userName: "",
      firstName: "",
      lastName: "",
    },
  },
  reducers: {
    //etat de la modale editname
    hideEditButton: (state) => {
      state.showEditButton = false;
      state.showModal = true;
      state.showWelcomeMessage = false;
    },
    //etat de la modale editname
    hideModal: (state) => {
      state.showModal = false;
      state.showWelcomeMessage = true;
      state.showEditButton = true;
    },
    //stock les info qui vien du call api 
    setUserDetails: (state, action) => {
      const { userName, firstName, lastName } = action.payload;
      state.userData.userName = userName;
      state.userData.firstName = firstName;
      state.userData.lastName = lastName;
    },
    //stocke le nouveau username 
    updateUserName: (state, action) => {
      state.userData.userName = action.payload;
    },
  },
});

export const { hideEditButton, hideModal, setUserDetails, updateUserName } = modalEditNameSlice.actions;
export default modalEditNameSlice.reducer;
