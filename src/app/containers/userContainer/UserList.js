import React, { Component } from 'react';
import { fetchUsers, deleteUser, isAddUser } from '../../redux/actions/User/UserAction';
import { connect } from 'react-redux';
import UserForm from './UserForm';


class UserList extends Component {
    constructor(){
        super();

        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    componentWillMount(){
        this.props.fetchUsers();
    }

    deleteUser(userId){
        this.props.deleteUser(userId)
    }
    
    addUser(){
       this.props.isAddUser(true, {}, false);
    }

    editUser(isAdd, userDetails, isUpdate){
       this.props.isAddUser(isAdd, userDetails, isUpdate);
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
                        <button onClick={()=>this.editUser(true, user, true)} className="btn btn-primary">Edit</button>&nbsp;
                        <button 
                            onClick={()=>this.deleteUser(user.id)}
                            className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>        
        ))
        
        if(this.props.isAdd){
            return (
                <div className="container table-responsive">
                    <UserForm/>
                </div>
            )
        } else {
            return(
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
            )
        }
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    newUser: state.users.user,
    isAdd: state.users.isAdd
})

export default connect(mapStateToProps, { fetchUsers, deleteUser, isAddUser })(UserList);