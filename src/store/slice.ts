import { createSlice } from "@reduxjs/toolkit";


const card = {
    count: 0
}

const sliceCard = createSlice({
    name: "card",
    initialState: card,
    reducers: {
        funP(state){
            state.count += 1
        },

        funM(state){
            state.count -= 1
        },
    }
})

export const { funP, funM } = sliceCard.actions
export default sliceCard.reducer;