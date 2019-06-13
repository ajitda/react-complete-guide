import React from 'react';
import classes from  './Person.css';
// import Radium from 'radium';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // };
    const rnd = Math.random();
    if (rnd > 0.7) {
         throw new Error( 'Something Went Wrong ');
    }
    return (
        <div className="Person" >
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

// export default Radium(person);
export default person;