import React, { Component } from 'react';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            flag_client: false,
            accountType: '',
            username: '',
            password: '',
            date: '',
            venue: ''
        }
    }

    loginSubmit = (event) => {
        event.preventDefault();
        console.log('username', this.username);
        this.props.sendLogin(this.accountType, this.username, this.password);
    }


    render() {
        return (<div className={'row'}>
            <div className={'col-6 offset-3'}>
                <div className={'card'}>
                    <form>
                        <div className={'form-group'}>
                            <label>ACCOUNT TYPE:</label>
                            <select className={'form-control'} onChange={this.accountTypeChange}>
                                <option value="" selected disabled>--Select--</option>
                                <option value="organiser">Organiser</option>
                                <option value="client">Client</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        <div className={"form-group"}>
                            <label>USERNAME:</label>
                            <input className={'form-control'} onChange={(e) => { this.username = e.target.value;console.log(this.username); }} />
                        </div>

                        <div className={"form-group"}>
                            <label>PASSWORD:</label>
                            <input type={'password'} className={'form-control'} onChange={(e) => { this.password = e.target.value; }} />
                        </div>

                        <div className={'form-group'}>
                            <div className={'text-center'}>
                                <button className={'btn btn-primary'} onClick={this.loginSubmit}>SIGN IN</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>);
    }
}


export default Login;