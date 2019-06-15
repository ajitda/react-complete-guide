import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    let btnClasses = '';
    const assaignedClasses = [];
    if (props.persons.length <= 2) {
      assaignedClasses.push('red');
    }
    if (props.persons.length <= 1) {
      assaignedClasses.push('bold');
    }
    if (props.showpersons) {
        btnClasses = 'red';
    }

    return (
        <div className="Cockpit">
        <h1>{props.appTitle}</h1>
        <p className={assaignedClasses.join(' ')}>This is really working!!</p>
        <button 
        className={btnClasses}
        onClick={props.clicked}>Switch Name</button>
        </div>
    );
}

export default cockpit;