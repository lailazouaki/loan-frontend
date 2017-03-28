/*

Lifecycle methods


Mounting
    constructor()
    componentWillMount()
    render()
    componentDidMount()

Updating
    componentWillReceiveProps()
    shouldComponentUpdate()
    componentWillUpdate()
    render()
    componentDidUpdate()

*/

import React from 'react';
import axios from 'axios';

import Dashboard from './Dashboard';

class App extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Dashboard/>
            </div>
        )
    }
}

export default App