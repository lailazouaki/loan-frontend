import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {

    constructor(props){
        super(props)
    }

    render (){
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                  <div className="container">
                    <div className="navbar-header">
                      <a href="../" className="navbar-brand">{this.props.title}</a>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <a href="#">Sign up</a>
                        </li>
                        <li>
                          <a href="../help/">Settings</a>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
        )
    }
}

export default NavBar