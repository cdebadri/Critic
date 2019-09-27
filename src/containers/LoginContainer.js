import Login from '../components/Login';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/login';

const mapDispatchToProps = dispatch => ({
    sendLogin: username => dispatch(loginAction(username))
})

export default connect(null, mapDispatchToProps)(Login);
