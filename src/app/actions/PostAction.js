import { FETCH_POSTS, NEW_POST } from './Types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}

export const createPost = (postDate) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postDate)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
}