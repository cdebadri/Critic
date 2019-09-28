import React, { Component } from 'react';

class SignUp extends Component {

    state = {
        accountType: '',
        username: '',
        password: ''
    }

    signUpSubmit = (event) => {
        event.preventDefault();
        console.log('username',this.username);
        this.props.sendSignUp(this.accountType, this.username, this.password);
    }

    render() {
        return (<div className={'row'}>
                <div className={'col-6 offset-3'}>
                    <div className={'card'}>
                <form>
                    <div className={'form-group'}>
                        <label>ACCOUNT TYPE:</label>
                        <select className={'form-control'} onChange={(e)=>{ this.accountType = e.target.value;}}>
                            <option value="" selected disabled>--Select--</option>
                            <option value="organiser">Organiser</option>
                            <option value="client">Client</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                    <div className={"form-group"}>
                        <label>USERNAME:</label>
                        <input className={'form-control'} onChange={(e)=>{ this.username = e.target.value;}} />
                    </div>

                    <div className={"form-group"}>
                        <label>PASSWORD:</label>
                        <input type={'password'} className={'form-control'} onChange={(e)=>{ this.password = e.target.value;}} />
                    </div>

                    <div className={'form-group'}>
                        <div className={'text-center'}>
                        <button className={'btn btn-success'} onClick={this.signUpSubmit}>SIGN UP</button>
                        </div>
                    </div>
                </form>
                </div>
                </div>
        </div>);
    }
}


export default SignUp;