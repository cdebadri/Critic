import React from 'react';
import EmptyCard from '../components/EmptyCard';
import QuestionCard from '../components/QuestionCard';
import FormCard from '../components/FormCard';
import {connect} from 'redux-saga/effects';
import {addQuestionAction, createSurveyAction} from '../redux/actions/clients';
import PropTypes from 'prop-types';

CreateSurveyContainer.propTypes = {
    questionList: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            option1: PropTypes.string.isRequired,
            option2: PropTypes.string.isRequired,
            option3: PropTypes.string.isRequired,
            option4: PropTypes.string.isRequired
        })
    ),
    addQuestion: PropTypes.func.isRequired,
    createSurvey: PropTypes.func.isRequired
}

class CreateSurveyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionObject: {
                question: '',
                option1: '',
                option2: '',
                option3: '',
                option4: ''
            }
        }
    }

    onModify = (questionP, option1P, option2P, option3P, option4P) => {
        this.setState({
            question: questionP,
            option1: option1P,
            option2: option2P,
            option3: option3P,
            option4: option4P
        })
    }

    modifyQuestion = (question) => {
        
    }

    onSubmit = (e, questionObject) => {
        e,preventDefault();
        createSurvey(questionObject);
    }
    
    render() {
        const { questionList, addQuestion } = this.props;
        const { question, option1, option2, option3, option4 } = this.state;
        const questionObject = { question, option1, option2, option3, option4 };
        return (
            <React.Fragment>
                <FormCard
                    questionObject={questionObject}
                    onModify={this.onModify}
                    onSubmit={this.onSubmit}
                    addQuestion={addQuestion} 
                />
                {(questionList.length === 0) ? <EmptyCard />
                : questionList.map(questionObject => {
                    <QuestionCard noActions={true} key={questionObject.question} />
                })}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    questionList: state.questionList
})

const mapDispatchToProps = dispatch => ({
    addQuestion: payload => dispatch(addQuestionAction(payload)),
    createSurvey: payload => dispatch(createSurveyAction(payload))
})

const CreateSurveyPage = connect(mapStateToProps, mapDispatchToProps)(CreateSurveyContainer);
export default CreateSurveyPage;