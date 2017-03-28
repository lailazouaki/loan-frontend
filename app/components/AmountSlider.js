import React from 'react';
import { connect } from 'react-redux';
import { chooseLoanAmount } from '../actions/loanActions';

import '../assets/css/amountDisplayer.css';
import '../assets/css/amountSlider.css';


class AmountSlider extends React.Component{

    constructor(props){
        super(props)
    }

    render (){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-sm-5 col-md-4">
                        <div className="box selected">
                            <span className="text selected-text">{this.props.title}</span>
                        </div>
                    </div>
                    <div className="col-xs-0 col-sm-2 col-md-4"></div>
                    <div className="col-xs-6 col-sm-5 col-md-4">
                        <div className="box selected">
                            <span className="text selected-text">{this.props.additionnalSign} {this.props.chosenAmount}</span>
                        </div>
                    </div>
                </div>
                <div><p><br/></p></div>
                <div className="row">
                    <div className="col-xs-12">
                        <input className="slider" type="range" defaultValue="0" min={this.props.minValue} max={this.props.maxValue} step={this.props.step} onChange={this.props.onChange}/>
                    </div>
                </div>
            </div>
        )
    }

}

AmountSlider.propTypes = {
    title: React.PropTypes.string.isRequired,
}

export default AmountSlider