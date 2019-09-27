import Login from '../components/Login';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/login';

const mapDispatchToProps = {
    sendLogin: loginAction
}

export default connect(null, mapDispatchToProps)(Login);
