import React, { Component } from 'react';
import { fetchUsers, deleteUser, updateAddUser } from '../../redux/actions/User/UserAction';
import { connect } from 'react-redux';
import UserForm from './UserForm';


class UserList extends Component {
    constructor(){
        super();

        this.deleteUser = this.deleteUser.bind(this);
    }

    componentWillMount(){
        this.props.fetchUsers();
    }

    deleteUser(userId){
        this.props.deleteUser(userId)
    }
    
    addUser(){
        this.props.updateAddUser(true);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newUser.name !== undefined){
            this.props.users.unshift(nextProps.newUser); 
        }
    }

    render() {
        
        const userList = this.props.users.map(user => (
            <tbody key={user.id}>         
                <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-primary">Edit</button>&nbsp;
                        <button 
                            onClick={()=>this.deleteUser(user.id)}
                            className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>        
        ))
        
        if(this.props.isAddUser){
            return (
                <div className="row">
                    <div className="container table-responsive">
                        <UserForm/>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="row">
                    <div className="container table-responsive">
                        <div className="text-right"> 
                            <button 
                                className="btn btn-primary text-right"
                                onClick={this.addUser.bind(this)}>
                                Add User
                            </button>
                        </div>
                        <table className="mt-1 table table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                            </thead>                
                            {userList}  
                        </table>
                    </div>    
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    users: state.users.items,
    newUser: state.users.item,
    isAddUser: state.users.isAddUser
})

export default connect(mapStateToProps, { fetchUsers, deleteUser, updateAddUser })(UserList);