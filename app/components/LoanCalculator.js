import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as loanActions from '../actions/loanActions';

import AmountDisplayer from './AmountDisplayer';
import LoanSheet from './LoanSheet';
import PayEarlyButton from './PayEarlyButton';

import { addNavBar, total, toggleDisableButton } from '../helpers';

function mapStateToProps(state) {
  return {
    loans: state.loan.loans,
    selectedAmount: state.loan.selectedAmount
  };
}

class LoanCalculator extends React.Component {

    constructor(props){
        super(props)
    }

    componentWillMount(){
        var self = this
        axios({
            method: 'get',
            url: 'http://localhost:4000/loans',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        })
        .then(function(response){
            self.props.dispatch(loanActions.loadAllLoans(response.data))
        })
        .catch(function(error){
            console.log(error)
        })
    }

    // onPayEarlyClick(){
    //     var self = this
    //     axios({
    //         method: 'update'
    //         url:
    //     })
    //     .then(function(response){

    //     })
    //     .catch(function(error){

    //     })
    // }

    getActiveLoans(){
        var activeLoans = []
        this.props.loans.map(loanRow=>{
            if(loanRow.flag == 0)
                activeLoans.push(loanRow)
        })

        return activeLoans
    }

    render (){
        return (
            <div className="container">
                {addNavBar("Loan Repayment Calculator")}
                <p><br/><br/><br/><br/></p>
                <div className="row">
                    <div className="col">
                        <AmountDisplayer 
                            title="Amount to pay" 
                            activeLoans={true}
                            selectedAmount={this.props.selectedAmount} 
                            total={total(this.getActiveLoans())}/>
                    </div>
                </div>
                <div><p><br/></p></div>
                <div className="row">
                    <div className="col">
                        <LoanSheet 
                            selectedAmount={this.props.selectedAmount} 
                            total={total(this.getActiveLoans())}
                            loansPassed={this.getActiveLoans()}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-3">
                        <PayEarlyButton 
                            disabled={toggleDisableButton(this.props)}
                            selectedAmount={this.props.selectedAmount}/></div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(LoanCalculator)