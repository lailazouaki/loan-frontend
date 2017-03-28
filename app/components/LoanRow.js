import React from 'react';
import { connect } from 'react-redux';
import { updateComment } from '../actions/loanActions';

import '../assets/css/loanRow.css'

function mapStateToProps(state) {
  return {
    loans: state.loan.loans,
  };
}


class LoanRow extends React.Component {

    constructor(props){
        super(props)
    }

    onCommentChange(newComment){
        this.props.dispatch(this, newComment)
    }

    render (){
        console.log(this.props.rowCssClass)
        return (
                <tr className={this.props.colorOnSelect}>
                    <th>
                        <input 
                            type='checkbox'
                            value={this.props.selected}
                            onChange={this.props.onSelect}
                            disabled={this.props.disableCheckBox}/>
                    </th>
                    <th>
                        <p className={this.props.rowCssClass}>{this.props.amount}</p>
                    </th>
                    <th>
                        <p className={this.props.rowCssClass}>{this.props.percentage}</p>
                    </th>
                    <th>
                        <p className={this.props.rowCssClass}>{this.props.duration}</p>
                    </th>
                    <th>
                        <p className={this.props.rowCssClass}>{this.props.description}</p>
                    </th>
                    <th>
                        <input 
                            className="form-control"
                            type='text'
                            value={this.props.comment ? this.props.comment : ''}
                            onChange={() => this.onCommentChange(this.value)}/>
                    </th>
                </tr>
        )
    }
}

LoanRow.propTypes = {
    loanId: React.PropTypes.string.isRequired,
    amount: React.PropTypes.number.isRequired,
    percentage: React.PropTypes.number.isRequired,
    duration: React.PropTypes.number.isRequired,
    repayment: React.PropTypes.number,
    comments: React.PropTypes.string,
    flag: React.PropTypes.number.isRequired,
    selected: React.PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(LoanRow);