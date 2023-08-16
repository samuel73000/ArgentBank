import { createSlice } from '@reduxjs/toolkit';

const modalEditNameSlice = createSlice({
    name: 'modalEditName',
    initialState: {
        showEditButton: true,
        showModal: false,
        showWelcomeMessage: true,
    },
    reducers: {
        hideEditButton: state => {
            state.showEditButton = false;
            state.showModal = true;
            state.showWelcomeMessage = false;
        },
    },
});

export const { hideEditButton } = modalEditNameSlice.actions;
export default modalEditNameSlice.reducer;