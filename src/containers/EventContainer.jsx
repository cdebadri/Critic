import React from 'react';
import HomePage from '../pages/HomePage';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

EventContainer.propTypes = {
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    accountType: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
        eventName: PropTypes.string.isRequired,
        clientName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        venue: PropTypes.string.isRequired
    }))
}

class EventContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        <HomePage {...this.props} />
    }

}

const mapStateToProps = state => ({
    userName: state.userName,
    email: state.email,
    accountType: state.accountType,
    events: state.events
})

export default connect(mapStateToProps)(HomePage);