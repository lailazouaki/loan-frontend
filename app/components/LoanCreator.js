import React from 'react';
import axios from 'axios';
import AmountSlider from './AmountSlider';
import CreateLoanButton from './CreateLoanButton';
import LoanDescriptionInput from './LoanDescriptionInput';
import { addNavBar, addEmptyLines } from '../helpers';

import { connect } from 'react-redux';
import { chooseLoanAmount, chooseLoanDescription, chooseLoanDuration } from '../actions/loanActions';


function mapStateToProps(state){
    return {
        chosenAmount: state.createLoan.chosenAmount,
        loanDescription: state.createLoan.loanDescription,
        loanDuration: state.createLoan.loanDuration
    }
}

class LoanCreator extends React.Component {

    constructor(props){
        super(props)
    }

    createLoan(){
        console.log('create loan')
        var self = this
        var newLoan = {
            selected: false,
            flag: 0,
            description: self.props.loanDescription,
            amount: self.props.chosenAmount,
            percentage: 8.0,
            duration: self.props.loanDuration,
            comment: ''
        }

        axios({
            method: 'post',
            url: 'http://localhost:4000/loans',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            data: newLoan,
        })
        .then(function(response){
            console.log('ok')
            console.log(response)
            alert('well done, it worked')
            this.props.dispatch(chooseLoanAmount(0))
            this.props.dispatch(chooseLoanDescription(''))
            this.props.dispatch(chooseLoanDuration(0))
        })
        .catch(function(error){
            alert('error' + error)
            console.log('there was an error with the POST request')
            console.log(error)
        })
    }

    handleSlideChange(event){
        this.props.dispatch(chooseLoanAmount(event.target.value))
    }

    handleDescriptionChange(event){
        this.props.dispatch(chooseLoanDescription(event.target.value))
    }

    handleDurationChange(event){
        this.props.dispatch(chooseLoanDuration(event.target.value))
    }

    handleDisableButton(){
        var chosenAmount = this.props.chosenAmount
        var loanDescription = this.props.loanDescription
        var loanDuration = this.props.loanDuration
        var disable = false

        if(chosenAmount == 0 || loanDuration == 0 || loanDescription === "")
            disable = true

        return disable
    }

    render () {
        return (
            <div className="container">
                {addNavBar("Loan Creator")}
                <div><br/><br/><br/><br/><br/><br/></div>
                <AmountSlider
                    title="Loan amount"
                    additionnalSign="$"
                    minValue="0"
                    maxValue="1000000"
                    step="10000"
                    chosenAmount={this.props.chosenAmount}
                    onChange={this.handleSlideChange.bind(this)}/>
                <div><br/><br/><br/><br/></div>
                <AmountSlider
                    title="Duration"
                    additionnalSign=""
                    minValue="0"
                    maxValue="365"
                    step="1"
                    chosenAmount={this.props.loanDuration}
                    onChange={this.handleDurationChange.bind(this)}/>
                <div><br/><br/><br/><br/></div>
                <div className="row">
                    <div className="col-xs-12">
                        <LoanDescriptionInput 
                            loanDescription={this.props.loanDescription}
                            onChange={this.handleDescriptionChange.bind(this)}/>
                    </div>
                </div>
                <div><br/><br/><br/></div>
                <div className="row">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-3">
                        <CreateLoanButton
                            onClick={this.createLoan.bind(this)}
                            disabled={this.handleDisableButton()}/>
                    </div>
                </div>
            </div>
        )
    }

}


export default connect(mapStateToProps)(LoanCreator)