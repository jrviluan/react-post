import React, { Component } from 'react';
import UserList from './UserList';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNew: true,
            button: false
        }
    }

    render(){
        const divStyle = { paddingLeft: '0px'};
        const isNew = this.state.isNew;
        let button;

        if(isNew){
            button = <button type="submit" className="btn btn-primary">Submit</button>;   
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
                        className="form-control"
                        placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" 
                        className="form-control"
                        placeholder="Enter Username"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" 
                        className="form-control"
                        placeholder="Enter Email"/>
                    </div>
                    {button}                    
                </div>
            </div>
        )
    }
}

export default UserForm