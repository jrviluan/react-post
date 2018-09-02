import React, { Component } from 'react';
import { isAddUser, createUser, editUser } from '../../redux/actions/User/UserAction';
import { connect } from 'react-redux';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            button: false,
            id: null,
            name: '',
            username: '',
            email: ''
        }
    }

    componentWillMount() {
        if(this.props.userDetails.name !== undefined){
            this.setState({
                id: this.props.userDetails.id,
                name: this.props.userDetails.name,
                username: this.props.userDetails.username,
                email:this.props.userDetails.email,
            })
        }
        
    }

    onSubmit(){
        const user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        }

        this.props.createUser(user);
        this.onCancel();
    }

    onUpdate(){
        const user = {
            id: this.state.id,
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        }
        this.props.editUser(user);
        this.onCancel();
    }

    onCancel(){
        this.props.isAddUser(false);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const divStyle = { paddingLeft: '0px'};
        const isUpdate = this.props.isUpdate;
        let button;

        if(isUpdate){
            button = <button type="submit" onClick={() => this.onUpdate()} className="btn btn-primary">Save Changes</button>;   
        } else{
            button = <button type="submit" onClick={() => this.onSubmit()} className="btn btn-primary">Submit</button>;                 
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
                        onClick={this.onCancel.bind(this)}>Cancel
                    </button>                 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userDetails: state.users.userDetails,
    isUpdate: state.users.isUpdate,
})

export default connect (mapStateToProps,{ isAddUser, createUser, editUser })(UserForm);