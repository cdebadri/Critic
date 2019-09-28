import('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import PropTypes from 'prop-types';

QuestionTray.propTypes = {
    numberOfQuestions: PropTypes.number.isRequired,
    goToQuestion: PropTypes.func.isRequired
}

const QuestionTray = (props) => {
    const { numberOfQuestions } = props;
    const questionNumbers = [];
    for(let i = 1; i <= numberOfQuestions; i++) questionNumbers.push(i);

    return (
        <div className="card">
            <div className="card-body">
                {questionNumbers.map(question => (
                    <button
                        onClick={() => goToQuestion(question)} 
                        type="btn btn-primary text-white" className="rounded-circle">
                        {question}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuestionTray;
