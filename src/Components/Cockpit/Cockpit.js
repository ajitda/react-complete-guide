import React from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Aux';

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
      <Aux>
        <div className="Cockpit">
        <h1>{props.appTitle}</h1>
        <p className={assaignedClasses.join(' ')}>This is really working!!</p>
        <button 
        className={btnClasses}
        onClick={props.clicked}>Switch Name</button>
        </div>
      </Aux>
    );
}

export default cockpit;