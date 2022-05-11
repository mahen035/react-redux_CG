import React from 'react';
import axios from 'axios';

export const fetchPostsAction = () =>{

    return async(dispatch) =>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log('API Data: ',response.data)
        dispatch({
            type:'FETCH_POSTS',
            payload: response.data
        })
    }
}