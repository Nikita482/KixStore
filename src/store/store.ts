import { configureStore } from "@reduxjs/toolkit";
// import { sliceCardReducers } from "./slice";
import sliceCardsReducers from "./slice"



export const storeCards = configureStore({
    reducer: {
        cards: sliceCardsReducers
    }
})

export type RootState = ReturnType<typeof storeCards.getState>