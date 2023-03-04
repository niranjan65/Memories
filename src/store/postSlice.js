import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import * as api from '../api'

const initialState =[];


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        // post(state, action) {
        //     state.data = action.payload;
        // },
        create(state, action) {
            // state.data = [...state, action.payload];
            state.push(action.payload);
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getPost.fulfilled, (state, action)=>{
            state.data = action.payload;
        })
        
    }
})

export const {post, create } = postSlice.actions;
export default postSlice.reducer;

//Thunk


export const getPost = createAsyncThunk('post/fetch', async()=>{
    // const dispatch = useDispatch();
    try {
        
        const res = await api.fetchPosts();
        const data = res.data
        console.log(data);
         return data
    } catch (error) {
        console.log(error)
    }
})
// export const createPost = createAsyncThunk('post/fetch', async()=>{
//     const data = api.createPost();
//     return data;
// })

// export const getPost=()=> async (dispatch)=>{
//     try {
//         const data = await api.fetchPosts();
//         dispatch(post(data));
//     } catch (error) {
//         console.log(error)
//     }
// }
export const createPosts=(post)=> async (dispatch)=>{
    try {
        const data = await api.createPost(post);
        dispatch(create(data));
    } catch (error) {
        console.log(error)
    }
}
// export const createPosts=(post) = createAsyncThunk('post/create', async(dispatch)=>{
//     try {
//         const data = await api.fetchPosts(post);
//          dispatch(post(data));
//     } catch (error) {
//         console.log(error)
//     }
// })