import React from 'react';
import LoanRow from '../components/LoanRow';
import { connect } from 'react-redux';
import { selectLoan } from '../actions/loanActions';

import '../assets/css/loanSheet.css';

function mapStateToProps(state) {
  return {
    loans: state.loan.loans,
  };
}

class LoanSheet extends React.Component {

    constructor(props){
        super(props)
    }

    onSelect(loanRow){
        this.props.dispatch(selectLoan(loanRow))
    }

    disableCheckBox(loanRow){
        var disableCheckBox = false
        if(loanRow.flag != 0)
            disableCheckBox = true

        console.log('disable check box ? ' + disableCheckBox)
        return disableCheckBox
    }

    getCssClassForFlag(selected, flag){
        if(flag != 0)
            return "unactive-line"

        else{
            if(selected)
                return "active-line-selected"

            else
                return "active-line"
        }
    }

    getCssClassForRow(loanRow){
        var cssClass = "lead"
        if(loanRow.selected)
            cssClass += " selected-row"

        return cssClass
    }

    render(){
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="column-title">Select</th>
                            <th className="column-title">$</th>
                            <th className="column-title">%</th>
                            <th className="column-title">Duration</th>
                            <th className="column-title">Description</th>
                            <th className="column-title">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.loansPassed.map(loanRow=>{
                            return <LoanRow key={loanRow.loanId}
                                            loanId = {loanRow.loanId}
                                            amount = {loanRow.amount}
                                            percentage = {loanRow.percentage}
                                            duration = {loanRow.duration}
                                            description = {loanRow.description}
                                            flag = {loanRow.flag}
                                            selected = {loanRow.selected}
                                            comment = {loanRow.comment}
                                            disableCheckBox = {this.disableCheckBox(loanRow)}
                                            rowCssClass = {this.getCssClassForRow(loanRow)}
                                            colorOnSelect = {this.getCssClassForFlag(loanRow.selected, loanRow.flag)}
                                            onSelect = { () => this.onSelect(loanRow)}
                                        />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps)(LoanSheet)