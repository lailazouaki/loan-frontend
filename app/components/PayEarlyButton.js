import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/css/button.css';

class PayEarlyButton extends React.Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
            <div>
                <Button
                    disabled={this.props.disabled}
                    className="action-button">
                    <span className="text-button">Pay Loan Early: $ {this.props.selectedAmount}</span>
                </Button>
            </div>
        )
    }
}

export default PayEarlyButton