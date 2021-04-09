import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const { data } = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: data });
}

export const fetchUser = (userId) => async dispatch => {
    const { data } = await jsonPlaceholder.get(`users/${userId}`);
    dispatch({ type: 'FETCH_USER', payload: data });
}

