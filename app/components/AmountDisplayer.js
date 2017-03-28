import React from 'react';
import '../assets/css/amountDisplayer.css'

class AmountDisplayer extends React.Component {

    constructor(props){
        super(props)
    }

    getUnselectedAmount(){
        return this.props.total - this.props.selectedAmount
    }

    render(){
        var selectedAmount = (
                <div className="col-xs-5">
                    <div className="box selected">
                        <span className="text selected-text">{this.props.title}  <span className="amount-dollar selected-amount-dollar">$ {this.props.selectedAmount}</span></span>
                    </div>
                </div>
        )

        var unselectedAmount = (
            <div className="col-xs-5 transparent">
                <div className="box unselected">
                    <span className="text">Unselected  <span className="amount-dollar unselected-amount-dollar">$ {this.getUnselectedAmount()}</span></span>
                </div>
            </div>
        )

        if(this.props.activeLoans){
            return (
                <div className="row">
                    {selectedAmount}
                    <div className="col-xs-2"></div>
                    {unselectedAmount}
                </div>
            )
        }

        else{
            return (
                <div className="row">
                    <div className="col-xs-5 transparent">
                        <div className="box unselected">
                            <span className="text">Payed  <span className="amount-dollar unselected-amount-dollar">$ {this.props.selectedAmount}</span></span>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

AmountDisplayer.propTypes = {
    selectedAmount: React.PropTypes.number.isRequired,
    total: React.PropTypes.number,
}

export default AmountDisplayer