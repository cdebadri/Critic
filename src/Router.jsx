import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import EventPage from './containers/EventContainer';
import SurveyFormPage from './containers/SurveyFormContainer' 

const Routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={EventPage} /> 
             <Route path="/:client" component={SurveyFormPage} />
        </Switch>
    </Router>
)

export default Routing;