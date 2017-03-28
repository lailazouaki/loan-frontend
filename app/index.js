import React from 'react';
import store from './store/Store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import About from './components/About';
import LoanCalculator from './components/LoanCalculator';
import PaidLoans from './components/PaidLoans';
import LoanCreator from './components/LoanCreator';

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}/>
            <Route path='/about' component={About}/>
            <Route path='/activeLoans' component={LoanCalculator}/>
            <Route path='/paidLoans' component={PaidLoans}/>
            <Route path='/createLoan' component={LoanCreator}/>
        </Router>
    </Provider>,
	document.getElementById('app')
)