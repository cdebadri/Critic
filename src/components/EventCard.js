import('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import PropTypes from 'prop-types';

EventCard.propTypes = {
    id: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired
}

export const EventCard = (props) => {
    const { id, eventName, clientName, date, venue } = props;
    return (
        <div className="card">
            <img className="card-img-top" src="../../public/logo512.png" />
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="text-monospace">{eventName}</div>
                        <div className="text-monospace">{clientName}</div>
                        <div className="text-monospace">{date}</div>
                        <div className="text-monospace">{venue}</div>
                    </div>
                </div>
                <a href={`/${id}`} className="stretched-link"></a>
            </div>
        </div>
    )
}