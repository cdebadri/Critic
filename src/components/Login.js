import React, { Component } from 'react';

export default class Login extends Component {

    state = {
        accountType: '',
            username: '',
            password: ''
    }

    render() {
        return (<div>
            <div className={'col-5 offset-1 card'}>
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
                        <button onClick={()=>{this.props.sendLogin(this.username, this.password)}}>SIGN IN</button>
                    </div>
                </form>
            </div>
        </div>);
    }
}
