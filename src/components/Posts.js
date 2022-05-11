import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { fetchPostsAction } from '../actions/fetchPostsAction';
import { useSelector } from 'react-redux';

function Posts(props) {
    const dispatch = useDispatch();
    const data = useSelector(state => state)
    const titles = data ? data.map((val) =>
    <li key = {val.id}>{val.title}</li>) : 'No data Found'
    useEffect(()=>{
        dispatch(fetchPostsAction());
    },[])
    return (
        <div>
            <h2>Fetch data from API...</h2>
            <p>
                {titles}
            </p>
        </div>
    );
}

export default Posts;