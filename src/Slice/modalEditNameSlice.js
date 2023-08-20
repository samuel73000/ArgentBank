import { createSlice } from '@reduxjs/toolkit';

const modalEditNameSlice = createSlice({
    name: 'modalEditName',
    initialState: {
        showEditButton: true,
        showModal: false,
        showWelcomeMessage: true,
        userData :{
        userName :"",
        firstName :"",
        lastName :"",
    },
    },
    reducers: {
        hideEditButton: state => {
            state.showEditButton = false;
            state.showModal = true;
            state.showWelcomeMessage = false;
        },
        hideModal: state => {
            state.showModal = false;
            state.showWelcomeMessage = true;
            state.showEditButton = true;
        },
        setUserDetails: (state, action) => {
            const { userName, firstName, lastName } = action.payload;
            state.userData.userName = userName;
            state.userData.firstName = firstName;
            state.userData.lastName = lastName;
        },
        updateUserName: (state, action) => {
            state.userData.userName = action.payload;
          },
    },
});

export const { hideEditButton , hideModal,setUserDetails,updateUserName} = modalEditNameSlice.actions;
export default modalEditNameSlice.reducer;