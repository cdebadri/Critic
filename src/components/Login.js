import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Login extends Component {

    state = {
        accountType: '',
        username: '',
        password: ''
    }

    loginSubmit = (event) => {
        event.preventDefault();
        console.log('username',this.username);
        this.props.sendLogin(this.username);
    }

    render() {
        return (<div>
                <form>
                    <div className={'form-group'}>
                        <label>ACCOUNT TYPE:</label>
                        <select className={'form-control'} onChange={(e)=>{ this.accountType = e.target.value;}}>
                            <option value="organiser">Organiser</option>
                            <option value="client">Client</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>USERNAME:</label>
                        <input className={'form-control'} onChange={(e)=>{ this.username = e.target.value;}} />
                    </div>

                    <div className="form-group">
                        <label>PASSWORD:</label>
                        <input className={'form-control'} onChange={(e)=>{ this.password = e.target.value;}} />
                    </div>

                    <div className={'form-group'}>
                        <button onClick={this.loginSubmit}>SIGN IN</button>
                    </div>
                </form>
        </div>);
    }
}

Login.propTypes = {
    sendLogin: PropTypes.func.isRequired
}

export default Login;