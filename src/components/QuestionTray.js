import React from 'react';
import PropTypes from 'prop-types';

import('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

QuestionTray.propTypes = {
    numberOfQuestions: PropTypes.number.isRequired,
    goToQuestion: PropTypes.func.isRequired
}

const QuestionTray = (props) => {
    const { numberOfQuestions, goToQuestion } = props;
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
