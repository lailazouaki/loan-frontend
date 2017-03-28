import React from 'react';
import '../assets/css/amountDisplayer.css';
import '../assets/css/loanDescription.css';

class LoanDescriptionInput extends React.Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-2">
                        <div className="description-present">
                            <p className="description-text">Description </p>
                        </div>
                    </div>
                    <div className="col-xs-10">
                        <div className="form-control">
                            <input 
                                type="text"
                                value={this.props.loanDescription}
                                onChange={this.props.onChange}
                                className="description-input form-control"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoanDescriptionInput