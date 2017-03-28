import React from 'react';

class About extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        console.log('render about component')
        return (
            <div>
                <h1>About us!</h1>
            </div>
        )
    }
}

export default About