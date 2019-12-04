import React from 'react'
import PropTypes from 'prop-types';

import('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

EventCard.propTypes = {
    event: PropTypes.shape({
        client: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        venue: PropTypes.string.isRequired,
    }).isRequired,
    onSelectEvent: PropTypes.func.isRequired
}

const EventCard = (props) => {
    const { event, onSelectEvent } = props;
    return (
        <div className="card">
            <img className="card-img-top" src="../../public/logo512.png" />
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="text-monospace">{event.client}</div>
                        <div className="text-monospace">{event.date}</div>
                        <div className="text-monospace">{event.venue}</div>
                    </div>
                </div>
                <a onClick={() => onSelectEvent(event.id)} className="stretched-link"></a>
            </div>
        </div>
    )
}

export default EventCard;