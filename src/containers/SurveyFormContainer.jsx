import React from 'react';
import { getQuestionListAction } from '../redux/actions/users';
import { connect } from 'react-redux';
import QuestionCard from '../components/QuestionCard';
import QuestionTray from '../components/QuestionTray';
import { submitSurveyAction } from '../redux/actions/users';

SurveyFormContainer.propTypes = {
    questionList: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string,
            option1: PropTypes.string,
            option2: PropTypes.string,
            option3: PropTypes.string,
            option4: PropTypes.string
        })
    ).isRequired
}

class SurveyFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responses: [],
            currentQuestion: '',
            currentPos: 0
        }
    }

    componentDidMount() {
        getQuestionList();
    }

    saveResponse = (response) => {
        const { currentQuestion } = this.state;
        this.setState({
            responses: this.state.responses.push({ currentQuestion, response })
        })
    }

    clearResponse = (question) => {
        const { responses } = this.state;
        const index = responses.findIndex(response => {
            return response.question == question
        })
        const responses_dup = responses;
        responses_dup[index].response = '';
        this.setState({
            responses: responses_dup
        })
    }

    goToQuestion = (position) => {
        this.setState({
            currentPos: position
        })
    }

    goForward = (position) => {
        let cpos;
        if (position === this.state.responses.length - 1) {
            cpos = 0;
        } else {
            cpos = this.state.currentPos + 1;
        }
        this.setState({
            currentPos: cpos
        })
    }

    goBack = (position) => {
        let cpos;
        if (position === 0)
            cpos = this.state.responses.length - 1;
        else
            cpos = this.state.currentPos - 1;
        this.setState({
            currentPos: cpos
        })
    }

    onSubmit = (e, payload) => {
        e.preventDefault();
        submitSurvey(payload);
    }

    render() {
        const { questionList } = this.props;
        const { currentPos, responses } = this.state;
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <span
                            onClick={() => this.goBack(currentPos)}
                            class="oi oi-arrow-thick-left">
                        </span>
                    </div>
                    <div className="col-sm-10 col-md-10 col-lg-10">
                        <QuestionCard
                            questionObject={questionList[currentPos]}
                            saveResponse={this.saveResponse}
                            clearResponse={this.clearResponse}
                            noActions={false}
                        />
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <span
                            onClick={() => this.goForward(currentPos)}
                            class="oi oi-arrow-thick-right">
                        </span>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <QuestionTray numberOfQuestions={questionList.length} goToQuestion={this.goToQuestion} />
                </div>
            </div>
            <div className="row justify-content-center">
                <button
                    className="btn btn-primary"
                    type="submit" onClick={(e) => this.onSubmit(e, responses)}
                >Submit
                </button>
            </div>
        </React.Fragment>
    }
}

const mapStateToProps = state => ({
    questionList: state.questionList
})

const mapDispatchToProps = dispatch => {
    getQuestionList = () => dispatch(getQuestionListAction()),
    submitSurvey = payload => dispatch(submitSurveyAction(payload))
}

const SurveyFormPage = connect(mapStateToProps, mapDispatchToProps)(SurveyFormContainer);
export default SurveyFormPage;
