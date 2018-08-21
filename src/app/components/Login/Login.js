import React, { Component } from 'react';


class Login extends Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
    }

    render() {
        const form={
            'marginTop': '6em', 
            'paddingBottom': '2em'
        }
        return (
            <form>
                <div style={form} className="card col col-md-4 offset-md-4 pt-5">
                    <h3>Login</h3>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password"/>
                    </div>
                    <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}
export default Login;