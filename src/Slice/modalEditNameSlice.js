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
        setUserName: (state, action) => {
            state.userData.userName = action.payload;
        },
        setFirstName: (state, action) => {
            state.userData.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.userData.lastName = action.payload;
        },
    },
});

export const { hideEditButton , hideModal,setUserName ,setFirstName,setLastName} = modalEditNameSlice.actions;
export default modalEditNameSlice.reducer;