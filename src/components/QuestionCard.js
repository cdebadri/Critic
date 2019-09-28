import('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import PropTypes from 'prop-types';

QuestionCard.propTypes = {
    questionObject: PropTypes.shape({
        question: PropTypes.string.isRequired,
        option1: PropTypes.string.isRequired,
        option2: PropTypes.string.isRequired,
        option3: PropTypes.string.isRequired,
        option4: PropTypes.string.isRequired,
    }),
    saveResponse: PropTypes.func.isRequired,
    clearResponse: PropTypes.func.isRequired
}

const QuestionCard = (props) => {
    const { questionObject, saveResponse, clearResponse } = props;
    return (
        <div className="card">
            <div className="card-title">
                {questionObject.question}
            </div>
            <div className="card-body">
                <div className="form-check">
                    <input name={questionObject.question} id="option1" className="form-check-input" value="1" />
                    <label className="form-check-label" htmlFor="option1">{questionObject.option1}</label>
                </div>
                <div className="form-check">
                    <input name={questionObject.question} id="option2" className="form-check-input" value="2" />
                    <label className="form-check-label" htmlFor="option2">{questionObject.option2}</label>
                </div>
                <div className="form-check">
                    <input name={questionObject.question} id="option3" className="form-check-input" value="3" />
                    <label className="form-check-label" htmlFor="option3">{questionObject.option3}</label>
                </div>
                <div className="form-check">
                    <input name={questionObject.question} id="option4" className="form-check-input" value="4" />
                    <label className="form-check-label" htmlFor="option4">{questionObject.option4}</label>
                </div>
                <div>
                    <button 
                        onClick={() => saveResponse(questionObject.question.value)} 
                        type="button" className="btn btn-primary float-left"
                    >
                        Save Response
                    </button>
                    <button
                        onClick={() => clearResponse(questionObject.question.value)}
                        type="button" className="btn btn-primary float-right"
                    >
                        Clear Response
                    </button>
                </div>
                <button type="button" className="btn btn-primary float-left"></button>
            </div>
        </div>
    )
}

export default QuestionCard;