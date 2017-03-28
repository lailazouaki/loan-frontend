import React from 'react';
import NavBar from './components/NavBar';

export function addNavBar(title){
    return (
        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4"></div>
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <NavBar title={title}/>
            </div>
        </div>
    )
}

export function total(loans) {
    var total = 0
    loans.forEach((row) => {
        total += row.amount
    })

    return total
}

export function toggleDisableButton(props){
    var disable = true;
    var loans = props.loans;

    loans.forEach((row) =>{
        if(row.selected)
            disable = false
    })

    return disable
}

export function addEmptyLines(){
    return (
        <div><p><br/><br/><br/><br/><br/><br/><br/><br/></p></div>
    )
}
