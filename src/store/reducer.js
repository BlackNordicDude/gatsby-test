import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    currentTab: 'pallet',
    currentType: 'typical',
    order: [],
    isBasket: false,
    isModalOpen: false
}

export const changeType = createAction('CHANGE_TYPE')
export const changeTab = createAction('CHANGE_TAB')
export const addToOrder = createAction('ADD_TO_ORDER')
export const toggleBasket = createAction('TOGGLE_BASKET')
export const removeItem = createAction('REMOVE_ITEM')
export const toggleModal = createAction('TOGGLE_MODAL')
export const resetBasket = createAction('RESET_BASKET')

export default createReducer(initialState, {
    [changeType]: function(state, payload) {
        state.currentType = payload.payload;
    },
    [changeTab]: function(state, payload) {
        state.currentTab = payload.payload;
    },
    [addToOrder]: function(state, payload) {
        state.order.push(payload.payload);
    },
    [toggleBasket]: function(state, payload) {
        state.isBasket = payload.payload;
    },
    [removeItem]: function(state, payload) {
        state.order = state.order.filter(item => item.id !== payload.payload);
    },
    [toggleModal]: function(state, payload) {
        state.isModalOpen = payload.payload;
    },
    [resetBasket]: function(state) {
        state.order = []
    }

})