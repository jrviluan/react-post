import React, { Component } from 'react';
import { updateAddUser, createUser } from '../../redux/actions/User/UserAction';
import { connect } from 'react-redux';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            isNew: true,
            button: false,
            name: '',
            username: '',
            email: ''
        }
    }

    onSubmit(){
        
        const user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        }

        this.props.createUser(user);
        this.backToUserList();
    }

    backToUserList(){
        this.props.updateAddUser(false);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const divStyle = { paddingLeft: '0px'};
        const isNew = this.state.isNew;
        let button;

        if(isNew){
            button = <button type="submit" onClick={this.onSubmit.bind(this)} className="btn btn-primary">Submit</button>;   
        } else{
            button = <button type="submit" className="btn btn-primary">Save Changes</button>;     
        }

        return(
            <div>
                <h3>Add User</h3>
                <div className="col col-md-4" style={divStyle}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" 
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" 
                        name="username"
                        className="form-control"
                        placeholder="Enter Username"
                        value={this.state.username}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" 
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.onChange}/>
                    </div>
                    {button}  &nbsp; 
                    <button 
                        className="btn btn-secondary"
                        onClick={this.backToUserList.bind(this)}>Cancel</button>                 
                </div>
            </div>
        )
    }
}

export default connect (null,{ updateAddUser, createUser })(UserForm);