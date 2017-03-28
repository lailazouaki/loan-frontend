import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/css/button.css';

class CreateLoanButton extends React.Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
            <div>
                <Button
                    onClick={this.props.onClick}
                    disabled={this.props.disabled}
                    className="action-button">
                    <span className="text-button">Create Loan</span>
                </Button>
            </div>
        )
    }
}

export default CreateLoanButton