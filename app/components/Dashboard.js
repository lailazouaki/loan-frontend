import React from 'react';
import DashboardTile from './DashboardTile';
import { Link } from 'react-router';
import { addNavBar, addEmptyLines } from '../helpers'

import '../assets/css/dashboard.css';

class Dashboard extends React.Component {

    constructor(props){
        super(props)
    }

    addActiveLoans(){
        return (
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <Link to="/activeLoans">
                    <DashboardTile
                        name="Active Loans"
                        description="Click here to see all of your active loans. I hope there aren't so many!"
                        iconLink={require('../assets/img/search.svg')}/>
                </Link>
            </div>
        )
    }

    addPaidLoans(){
        return (
           <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <Link to="/paidLoans">
                    <DashboardTile
                        name="Paid Loans"
                        description="Check out everything you've already paid back, you rockstar."
                        iconLink={require('../assets/img/checked.svg')}/>
                </Link>
            </div>
        )
    }

    addCreateLoan(){
        return (
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <Link to="/createLoan">
                    <DashboardTile
                        name="Create Loan"
                        description="New loan? Come on!"
                        linkTo=""
                        iconLink={require('../assets/img/add.svg')}/>
                </Link>
            </div>
        )
    }

    addBorrow(){
        return (
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <DashboardTile
                    name="How much can I borrow?"
                    description="This is a very long description of what you could see if you clicked on this link."
                    linkTo=""
                    iconLink={require('../assets/img/question.svg')}/>
            </div>
        )
    }

    addAuditing(){
        return (
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <DashboardTile
                    name="Auditing"
                    description="This is a very long description of what you could see if you clicked on this link."
                    linkTo=""
                    iconLink={require('../assets/img/edit.svg')}/>
            </div>
        )
    }

    addReporting(){
        return (
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <DashboardTile
                    name="Reporting"
                    description="This is a very long description of what you could see if you clicked on this link."
                    linkTo=""
                    iconLink={require('../assets/img/reporting.svg')}/>
            </div>
        )
    }

    displayElements(){
        var elementsToDisplay = (
            <div className="container">
                {addNavBar("Dashboard")}
                {addEmptyLines()}
                <div className="row">
                    {this.addActiveLoans()}
                    {this.addPaidLoans()}
                    {this.addCreateLoan()}
                    {this.addBorrow()}
                    {this.addAuditing()}
                    {this.addReporting()}
                </div>
            </div>
        )

        return elementsToDisplay
    }

    render (){
        return this.displayElements()
    }

}

export default Dashboard