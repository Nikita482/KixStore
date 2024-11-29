import { createSlice } from "@reduxjs/toolkit";

interface FilterPayload {
    min: number;
    max: number;
}

const initialState = [
    { id: 1, name: "Nike Air Force 1 '07 QS", price: "1 000 ₽", gender: "man", size: 35, src: "https://i.pinimg.com/474x/03/1a/2c/031a2c14d9986d7219fca9ccdf689f29.jpg" },
    { id: 2, name: "Nike Air Force 1 '07 QS", price: "11 000 ₽", gender: "man", size: 36, src: "https://i.pinimg.com/736x/fb/12/54/fb1254f688e16b153af721314b8c3c0f.jpg" },
    { id: 3, name: "Nike Air Force 1 '07 QS", price: "12 000 ₽", gender: "man", size: 37, src: "https://i.pinimg.com/474x/e0/1d/28/e01d285fd3b43e4741aa2ea55c2d5e88.jpg" },
    { id: 4, name: "Nike Air Force 1 '07 QS", price: "13 000 ₽", gender: "man", size: 38, src: "https://i.pinimg.com/474x/d6/65/5b/d6655b1ffae3cb47cac61dbce919a40e.jpg" },
    { id: 5, name: "Nike Air Force 1 '07 QS", price: "14 000 ₽", gender: "man", size: 39, src: "https://i.pinimg.com/474x/88/58/ae/8858ae8f2fc0ef608d77162c2c24f001.jpg" },
    { id: 6, name: "Nike Air Force 1 '07 QS", price: "15 000 ₽", gender: "wom", size: 40, src: "https://i.pinimg.com/474x/14/04/ba/1404bad55211524738616ee496ff0f16.jpg" },
    { id: 7, name: "Nike Air Force 1 '07 QS", price: "16 000 ₽", gender: "wom", size: 41, src: "https://i.pinimg.com/474x/1f/5a/f1/1f5af18137dcdac0da4cc3adc6f00fe5.jpg" },
    { id: 8, name: "Nike Air Force 1 '07 QS", price: "17 000 ₽", gender: "wom", size: 42, src: "https://i.pinimg.com/474x/56/09/a3/5609a35b552b2b4c01f91635128f8bc4.jpg" },
    { id: 9, name: "Nike Air Force 1 '07 QS", price: "18 000 ₽", gender: "wom", size: 43, src: "https://i.pinimg.com/474x/19/6f/59/196f59dac495c6363319b3435fd9e596.jpg" },
    { id: 10, name: "Nike Air Force 1 '07 QS", price: "19 000 ₽", gender: "man", size: 35, src: "https://i.pinimg.com/474x/6f/64/e4/6f64e4af3734d6614f7c3132864cfb95.jpg" },
    { id: 11, name: "Nike Air Force 1 '07 QS", price: "20 000 ₽", gender: "man", size: 36, src: "https://i.pinimg.com/474x/7e/4d/60/7e4d60a9d3d540362130284c785c2eac.jpg" },
    { id: 12, name: "Nike Air Force 1 '07 QS", price: "21 000 ₽", gender: "man", size: 37, src: "https://i.pinimg.com/474x/2d/a7/22/2da7226d222bf45bf25f07c6e6b6150f.jpg" },
    { id: 13, name: "Nike Air Force 1 '07 QS", price: "23 000 ₽", gender: "wom", size: 38, src: "https://i.pinimg.com/474x/c6/ba/ad/c6baad34673d8742ad0abb17bc5bd2e2.jpg" },
    { id: 14, name: "Nike Air Force 1 '07 QS", price: "4 000 ₽", gender: "wom", size: 39, src: "https://i.pinimg.com/474x/0b/6c/39/0b6c39988fef3fadc93bb9bc44aefc16.jpg" },
    { id: 15, name: "Nike Air Force 1 '07 QS", price: "25 000 ₽", gender: "wom", size: 40, src: "https://i.pinimg.com/474x/56/8a/69/568a695559457df848987a3cf5742a06.jpg" },
    { id: 16, name: "Nike Air Force 1 '07 QS", price: "26 000 ₽", gender: "wom", size: 41, src: "https://i.pinimg.com/474x/3f/94/69/3f9469c8617a74b27abd87638c37505b.jpg" },
    { id: 17, name: "Nike Air Force 1 '07 QS", price: "27 000 ₽", gender: "man", size: 42, src: "https://i.pinimg.com/474x/3f/94/69/3f9469c8617a74b27abd87638c37505b.jpg" },
    { id: 18, name: "Nike Air Force 1 '07 QS", price: "28 000 ₽", gender: "man", size: 43, src: "https://i.pinimg.com/474x/89/a5/96/89a5967de90d1ec254e3839c25da30f8.jpg" },
    { id: 19, name: "Nike Air Force 1 '07 QS", price: "29 000 ₽", gender: "man", size: 36, src: "https://i.pinimg.com/474x/0d/50/22/0d5022c81fcd49b49938a9a15df72c54.jpg" },
    { id: 20, name: "Nike Air Force 1 '07 QS", price: "5 000 ₽", gender: "wom", size: 37, src: "https://i.pinimg.com/474x/30/04/11/3004112b01baaaf940620d1df7c7c745.jpg" },
    { id: 21, name: "Nike Air Force 1 '07 QS", price: "6 000 ₽", gender: "wom", size: 38, src: "https://i.pinimg.com/474x/48/fa/1c/48fa1cdd5f3557bdf2b86e947b7bbbfa.jpg" },
    { id: 22, name: "Nike Air Force 1 '07 QS", price: "7 000 ₽", gender: "wom", size: 39, src: "https://i.pinimg.com/474x/c0/83/fd/c083fd3449f6fe61d76441e807ad6981.jpg" },
    { id: 23, name: "Nike Air Force 1 '07 QS", price: "8 000 ₽", gender: "man", size: 40, src: "https://i.pinimg.com/474x/b4/08/8b/b4088bcce850cd4db451e0e0fedb107d.jpg" },
    { id: 24, name: "Nike Air Force 1 '07 QS", price: "9 000 ₽", gender: "man", size: 41, src: "https://i.pinimg.com/474x/46/64/59/466459c60bbfe77908d56c4190945dd5.jpg" },
    { id: 25, name: "Nike Air Force 1 '07 QS", price: "10 000 ₽", gender: "man", size: 42, src: "https://i.pinimg.com/474x/af/32/54/af32549ce30ea23b80458ed664088850.jpg" },
    { id: 26, name: "Nike Air Force 1 '07 QS", price: "11 000 ₽", gender: "wom", size: 43, src: "https://i.pinimg.com/474x/f3/c0/01/f3c0015ba00f71b82737616d072c9498.jpg" },
    { id: 27, name: "Nike Air Force 1 '07 QS", price: "12 000 ₽", gender: "wom", size: 36, src: "https://i.pinimg.com/474x/15/29/34/152934457d51bff03fc4e91e0f5d3b57.jpg" },
    { id: 28, name: "Nike Air Force 1 '07 QS", price: "13 000 ₽", gender: "wom", size: 37, src: "https://i.pinimg.com/474x/4b/3e/06/4b3e0647c37691c86dcaeed0142cf691.jpg" },
    { id: 29, name: "Nike Air Force 1 '07 QS", price: "14 000 ₽", gender: "wom", size: 38, src: "https://i.pinimg.com/474x/9a/06/88/9a0688477c5e56ca0e85f817182545fd.jpg" },
    { id: 30, name: "Nike Air Force 1 '07 QS", price: "15 000 ₽", gender: "wom", size: 39, src: "https://i.pinimg.com/474x/75/1a/73/751a731fb5d17ad35b3d5766ed7e3c9a.jpg" },
    { id: 31, name: "Nike Air Force 1 '07 QS", price: "16 000 ₽", gender: "wom", size: 40, src: "https://i.pinimg.com/474x/0d/50/22/0d5022c81fcd49b49938a9a15df72c54.jpg" },
    { id: 32, name: "Nike Air Force 1 '07 QS", price: "17 000 ₽", gender: "wom", size: 41, src: "https://i.pinimg.com/474x/4b/e2/88/4be28818502a091dd303887367b78927.jpg" },
    { id: 33, name: "Nike Air Force 1 '07 QS", price: "18 000 ₽", gender: "man", size: 42, src: "https://i.pinimg.com/474x/56/8a/69/568a695559457df848987a3cf5742a06.jpg" },
    { id: 34, name: "Nike Air Force 1 '07 QS", price: "19 000 ₽", gender: "man", size: 43, src: "https://i.pinimg.com/474x/10/35/7a/10357ac00005a12e566e5b2f3c95542f.jpg" },
    { id: 35, name: "Nike Air Force 1 '07 QS", price: "20 000 ₽", gender: "man", size: 36, src: "https://i.pinimg.com/474x/22/9d/91/229d91f13e2307aeea7ef85fd1541583.jpg" },
    { id: 36, name: "Nike Air Force 1 '07 QS", price: "21 000 ₽", gender: "man", size: 37, src: "https://i.pinimg.com/474x/8b/36/fe/8b36fe225cb61310382b5c8485631ff2.jpg" },
    { id: 37, name: "Nike Air Force 1 '07 QS", price: "22 000 ₽", gender: "man", size: 38, src: "https://i.pinimg.com/474x/31/fe/df/31fedff3d12ae2d6a8770148b86cd005.jpg" },
    { id: 38, name: "Nike Air Force 1 '07 QS", price: "23 000 ₽", gender: "wom", size: 39, src: "https://i.pinimg.com/474x/69/dc/00/69dc00077cc03e2bfc6d4569ce6577b4.jpg" },
    { id: 39, name: "Nike Air Force 1 '07 QS", price: "24 000 ₽", gender: "wom", size: 40, src: "https://i.pinimg.com/474x/b9/4f/dd/b94fdd0f8d638971c2a5c3006e25c13b.jpg" },
    { id: 40, name: "Nike Air Force 1 '07 QS", price: "25 000 ₽", gender: "wom", size: 41, src: "https://i.pinimg.com/474x/1e/60/e5/1e60e53d5f17f7c623f74bbd539f2353.jpg" },
    { id: 41, name: "Nike Air Force 1 '07 QS", price: "26 000 ₽", gender: "man", size: 42, src: "https://i.pinimg.com/474x/49/93/a6/4993a626884acf8adbd3c14212b5f47b.jpg" },
    { id: 42, name: "Nike Air Force 1 '07 QS", price: "27 000 ₽", gender: "wom", size: 43, src: "https://i.pinimg.com/474x/38/cc/94/38cc94cb4e679cec71fb5ec810060f84.jpg" },
    { id: 43, name: "Nike Air Force 1 '07 QS", price: "28 000 ₽", gender: "wom", size: 36, src: "https://i.pinimg.com/474x/70/48/d7/7048d7a475eebd79c16cef538a8c37b4.jpg" },
    { id: 44, name: "Nike Air Force 1 '07 QS", price: "29 000 ₽", gender: "man", size: 37, src: "https://i.pinimg.com/474x/4a/e7/b8/4ae7b8deed5c017c43288e6a8f841e80.jpg" },
    { id: 45, name: "Nike Air Force 1 '07 QS", price: "5 000 ₽", gender: "man", size: 38, src: "https://i.pinimg.com/474x/fd/58/31/fd5831638bd84141ea36e247e30d4e8a.jpg" },
    { id: 46, name: "Nike Air Force 1 '07 QS", price: "6 000 ₽", gender: "man", size: 39, src: "https://i.pinimg.com/474x/8a/57/ff/8a57ff28bb294cf7afa282b23d220a07.jpg" },
    { id: 47, name: "Nike Air Force 1 '07 QS", price: "7 000 ₽", gender: "wom", size: 40, src: "https://i.pinimg.com/474x/28/b3/ff/28b3ffd81c8a59cb758902cd58c42c6e.jpg" },
    { id: 48, name: "Nike Air Force 1 '07 QS", price: "8 000 ₽", gender: "wom", size: 41, src: "https://i.pinimg.com/474x/b9/9c/09/b99c09b7e0128dcaacd85516a1f30816.jpg" },
    { id: 49, name: "Nike Air Force 1 '07 QS", price: "9 000 ₽", gender: "man", size: 42, src: "https://i.pinimg.com/474x/9e/46/27/9e46279afa1f73fa5512924669a877ce.jpg" },
    { id: 50, name: "Nike Air Force 1 '07 QS", price: "10 000 ₽", gender: "man", size: 43, src: "https://i.pinimg.com/474x/f4/a4/ec/f4a4ec0d7803c344cdee0af06a97d457.jpg" },
]

const sliceCard = createSlice({
    name: "card",
    initialState,
    reducers: {
        filterCards: (state, action: { payload: FilterPayload }) => {
            const { min, max } = action.payload;
            return state.filter(card => {
                const price = parseInt(card.price.replace(/\D/g, '')); 
                return price >= min && price <= max;
            });
        }
    }
})

export default sliceCard.reducer;
