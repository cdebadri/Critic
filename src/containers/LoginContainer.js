import Login from '../components/Login';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/login';

const mapDispatchToProps = dispatch => ({
    sendLogin: (accountType, username, password) => dispatch(loginAction(accountType, username, password))
})

export default connect(null, mapDispatchToProps)(Login);
