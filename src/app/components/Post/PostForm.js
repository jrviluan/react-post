import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, updatePost } from '../../actions/PostAction';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id:null,
                title: '',
                body: '',
                isNew: true
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillReceiveProps(){
        this.setState({ }, this.myFunction)
    }

    myFunction = () => {
        this.setState({ 
            id: this.props.post.id,
            title: this.props.post.title,
            body: this.props.post.body,
            isNew: this.props.button
        })
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
        this.clearForm();
    }

    onUpdate(e){
        e.preventDefault();

        const post = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body
        }

        this.props.updatePost(post);
        this.clearForm();
        this.setState({ isNew: true })
        
    }

    clearForm(){
        this.setState({
            id: null,
            title: '',
            body: ''
        })
    }

    render(){
        const divStyle = { paddingLeft: '0px'};
        const isNew = this.state.isNew;
        let button;
        let onClick;

        if(isNew){
            onClick = this.onSubmit;
            button = <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>;     
        } else{
            onClick = this.onUpdate;
            button = <button type="submit" onClick={this.onUpdate} className="btn btn-primary">Save Changes</button>;     
        }
        return (
            
            <div className="container">
                <form>
                    <h1>Add Post</h1>
            
                    <div className="col col-md-4" style={divStyle}>
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
                            placeholder="Enter Body"
                            value={this.state.body}
                            onChange={this.onChange}/>
                        </div>
                        
                        {button}
                    </div>
                </form>
            </div>
        )
    }
}

export default connect (null, { createPost, updatePost })(PostForm);