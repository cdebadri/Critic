import React from 'react'
import PropTypes from 'prop-types';

import('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

FormCard.PropTypes = {
    questionObject: PropTypes.shape({
        question: PropTypes.string.isRequired,
        option1: PropTypes.string.isRequired,
        option2: PropTypes.string.isRequired,
        option3: PropTypes.string.isRequired,
        option4: PropTypes.string.isRequired,
    }),
    onModify: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
const FormCard = (props) => {
    const { questionObject, onModify, onSubmit } = props;
    const labelText = {
        question: 'Question',
        option1: 'Option (a)',
        option2: 'Option (b)',
        option3: 'Option (c)',
        option4: 'Option (d)'
    }
    return (
        <React.Fragment>
            <form onSubmit={(e) => onSubmit(e, questionObject)}>
                {Object.keys(questionObject).map(key => {
                    <diV className="form-group">
                        <label htmlFor={key}>{labelText[key]}</label>
                        <input name={key} value={questionObject.key} 
                            onChange={onModify({...questionObject})} 
                        />
                    </diV>
                })}
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </React.Fragment>
    )
}

export default FormCard;