import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="col col-md-4 offset-md-4 pt-5">
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;