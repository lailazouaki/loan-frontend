import React from 'react';
import '../assets/css/dashboardTile.css';

class DashboardTile extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="container tile">
                <div className="row">
                    <div className="col-xs-1 icon-background">
                        <img className="icon" src={this.props.iconLink}/>
                    </div>
                    <div className="col-xs-3">
                        <p className="name">{this.props.name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <p className="description">{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }

}

DashboardTile.propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    iconLink: React.PropTypes.string.isRequired,
}

export default DashboardTile