import React, { Component } from 'react';
import { fetchUsers } from '../actions/User/UserAction';
import { connect } from 'react-redux';


class UserList extends Component {
    componentWillMount(){
        this.props.fetchUsers();
       
    }

    render() {
        const userList = this.props.users.map(user => (
            <div key={user.id}>
                <h3>{user.name}</h3>
            </div>
        ))

        return(
            <div>
                {userList}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items
})

export default connect(mapStateToProps, { fetchUsers })(UserList);