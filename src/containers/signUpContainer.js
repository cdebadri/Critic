import { connect } from 'react-redux';
import { signUpAction } from '../redux/actions/login';
import SignUp from '../components/signUp';

const mapDispatchToProps = dispatch => ({
    sendSignUp: (accountType, username, password) => dispatch(signUpAction(accountType, username, password))
})

export default connect(null, mapDispatchToProps)(SignUp);
