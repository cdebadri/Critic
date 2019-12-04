import React from 'react';
import EventCard from '../components/EventCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { selectEventAction, getAlleventsAction } from '../redux/actions/users';
import('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

EventContainer.propTypes = {
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    accountType: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            client: PropTypes.string,
            date: PropTypes.string,
            venue: PropTypes.string
        })).isRequired
}

class EventContainer extends React.Component {
    componentDidMount() {
        const { getAllEvents } = this.props;
        getAllEvents();
    }

    onSelectEvent = (id) => {
        const { history, selectEvent } = this.props;
        selectEvent(id);
        history.push(`/surveyform/${id}`);
    }

    render() {
        const { events } = this.props;
        return (
            <div className="row">
                {events.map(event => (
                    <div className="col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3" key={event.id}>
                        <EventCard event={event} onSelectEvent={this.onSelectEvent} />
                    </div>
                ))}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    userName: state.userName,
    email: state.email,
    accountType: state.accountType,
    events: state.events
})

const mapDispatchToProps = dispatch => ({
    selectEvent: id => dispatch(selectEventAction(id)),
    getAllEvents: () => dispatch(getAlleventsAction())
})

const EventPage = connect(mapStateToProps, mapDispatchToProps)(EventContainer);
export default withRouter(EventPage);