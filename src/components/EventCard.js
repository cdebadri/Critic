import('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import PropTypes from 'prop-types';

EventCard.propTypes = {
    eventName: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired
}

export const EventCard = (props) => {
    const {eventName, clientName, date, venue} = props;
    return (
        <div ></div>
    )
}