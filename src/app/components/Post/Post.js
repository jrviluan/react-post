import React, { Component } from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/PostAction';

class Post extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost); 
        }
    }

    render(){
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>  
        ))

        const divStyle = {
            padding: '15px',
        }

        return (
            <div style={divStyle}>
                <PostForm />
                <hr/>
                {postItems}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
}) 

export default connect(mapStateToProps, { fetchPosts })(Post);