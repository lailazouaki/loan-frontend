import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as loanActions from '../actions/loanActions';

import AmountDisplayer from './AmountDisplayer';
import LoanSheet from './LoanSheet';
import { addNavBar, total } from '../helpers';


function mapStateToProps(state) {
  return {
    loans: state.loan.loans,
  };
}

class PaidLoans extends React.Component {

    constructor(props){
        super(props)
    }


    componentWillMount(){
        var self = this
        axios.get('https://api.myjson.com/bins/8kwb5')
        .then(function(response){
            self.props.dispatch(loanActions.loadAllLoans(response.data))
        })
        .catch(function(error){
            console.log(error)
        })
    }

    getPaidLoans(){
        console.log(this.props.loans)
        var paidLoans = []
        this.props.loans.map(loanRow=>{
            if(loanRow.flag != 0)
                paidLoans.push(loanRow)
        })

        return paidLoans
    }

    render(){
        return (
            <div className="container">
                {addNavBar("Paid Loans")}
                <p><br/><br/><br/><br/></p>
                <div className="row">
                    <div className="col">
                        <AmountDisplayer 
                            title="Payed"
                            activeLoans={false}
                            selectedAmount={total(this.getPaidLoans())}/>
                    </div>
                </div>
                <div><p><br/></p></div>
                <div className="row">
                    <div className="col">
                        <LoanSheet 
                            selectedAmount={total(this.getPaidLoans())} 
                            loansPassed={this.getPaidLoans()}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PaidLoans)