import React from 'react';
import EmptyCard from '../components/EmptyCard';
import QuestionFormatCard from '../components/QuestionFormatCard';
import {connect} from 'redux-saga/effects';

class CreateSurveyContainer extends React.Component {
    
    render() {
        const { questionList } = this.props;

        return (
            <React.Fragment>
                {(questionList.length === 0) ? <EmptyCard />
                : <QuestionFormatCard />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    
})