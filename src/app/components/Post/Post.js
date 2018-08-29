import React, { Component } from 'react';
import PostList from '../../containers/postContainer/PostList';

class Post extends Component {
    render(){
        return (
            <div>  
                <PostList />
            </div>
        )
    }
}

export default Post;