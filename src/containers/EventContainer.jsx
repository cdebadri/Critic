import React from 'react';
import EventCard from '../components/EventCard';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

EventContainer.propTypes = {
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    accountType: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
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
        const {events} = this.props;
        <div className="row">
            {events.map(event => (
                <div className="col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3" key={event.id}>
                    <EventCard {...event} />
                </div>
            ))}
        </div>
    }

}

const mapStateToProps = state => ({
    userName: state.userName,
    email: state.email,
    accountType: state.accountType,
    events: state.events
})

export default connect(mapStateToProps)(EventContainer);