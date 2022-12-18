// import uuid from "react-uuid";
// import {createSlice} from "@reduxjs/toolkit";
//
// const initialState = {
//     collection: {
//         main: null,
//         other: []
//     },
//     resize: {
//         small: {
//             width: 200,
//             height: 200,
//         },
//     }
// };
//
// const profile = createSlice({
//     name: 'profile',
//     initialState: initialState,
//     reducers: {
//         addImage(state, action) {
//             const photo = action.payload;
//             const newPhoto = {
//                 id: uuid(),
//                 ...photo.data
//             };
//             state.collection.other = [...state.collection.other, newPhoto];
//             if (photo.isMain === true) {
//                 state.collection.main = newPhoto;
//             }
//         },
//     }
// });
//
// export const {addImage} = profile.actions;
// export default profile.reducer;