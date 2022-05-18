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
                <table border="1">
                    <tr>
                        <th>BODY</th>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>USER ID</th>
                    </tr>
                    {data ? data.map((val) => (
                        <tr key={val.id}>
                            <td>{val.body}</td>
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.userId}</td>
                        </tr>
                    )):'No Data Found'}
                </table>
            </p>
        </div>
    );
}

export default Posts;