import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/PostAction';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }

    render(){
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="col col-md-4">
                        <div className="form-group">
                            <label>Title: </label>
                            <input type="text" 
                            className="form-control" 
                            name="title" 
                            placeholder="Enter Title"
                            value={this.state.title}
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Body</label>
                            <textarea className="form-control"
                            name="body"
                            value={this.state.body}
                            onChange={this.onChange}/>
                        </div>
                        
                        <button 
                        type="submit" 
                        className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}



export default connect (null, { createPost })(PostForm);