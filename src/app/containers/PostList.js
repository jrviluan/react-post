import React, { Component } from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/Post/PostAction';

class PostList extends Component {
    constructor(){
        super();
        this.deletePost = this.deletePost.bind(this);
        this.editPost = this.editPost.bind(this);

        this.state = {
            post: {
                id: '',
                title: '',
                body: ''
            },
            button:false
        }
    }

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost); 
        }
    }

    deletePost(postId){
        this.props.deletePost(postId);
    }

    editPost(post){
        this.setState({ post:post, button: false });
    }

    render(){
        
        const postItems = this.props.posts.map(post => (
            <div key={post.id} className="row">
                <div className="container">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button
                        onClick={() =>this.editPost(post)}
                        className="btn btn-primary">
                        Edit
                    </button>&nbsp;
                    <button
                        onClick={() =>this.deletePost(post.id)}
                        className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>  
        ))

        const divStyle = {
            padding: '15px',
        }

        return (
            <div style={divStyle}>
                <PostForm post={this.state.post} n_button={this.state.button}/>
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

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostList);