import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            isFormValid: false,
            touched: {
              email: '',
              password: '',
            },
          };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        this.validate(this.state.email, this.state.password);
        this.formValid();
    }

    handleEmailChange(e){
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e){
        this.setState({ password: e.target.value });
    }

    handleBlur = (field) => () => {
        this.validate(this.state.email, this.state.password);
    }

    validate(email, password) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const checkEmail = re.test(String(email).toLowerCase());
   
        const vemail = email.length === 0 || !checkEmail; 
        const vpassword =  password.length === 0;
        
        this.setState({
            touched: {
                ...this.state.touched,
                email: vemail,
                password: vpassword,
            }
        })         
    }

    formValid(){
        this.setState({ isFormValid: this.state.touched.email === false && this.state.touched.password === false })
    }

    render() {
        const form = {
            'marginTop': '6em', 
            'paddingBottom': '2em'
        }

        const hasError = {
            'display': 'block',
            'width': '100%',
            'marginTop': '.25rem',
            'fontSize': '80%',
            'color': '#dc3545'
        }

        const noError = {
            'display': 'none',
        }
        
        if(this.state.isFormValid) {
            return (<Redirect to="/home"/>)
        } else {
            return (
                <form>
                    <div style={form} className="card col col-md-4 offset-md-4 pt-5">
                        <h3>Login</h3>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" 
                                className={"form-control " + (this.state.touched.email ? 'is-invalid' : '')} 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                onBlur={this.handleBlur('email')}/>
                            <span style={this.state.touched.email ? hasError : noError}>Email is invalid.</span>
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" 
                                className={"form-control " + (this.state.touched.password ? 'is-invalid' : '')} 
                                id="exampleInputPassword1" 
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                onBlur={this.handleBlur('password')}/>
                            <span style={this.state.touched.password ? hasError : noError}>Password is required.</span>
                        </div>
                        <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            );
        }
    }
}
export default Login;