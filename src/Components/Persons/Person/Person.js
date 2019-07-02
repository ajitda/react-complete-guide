import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from  './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
// import Radium from 'radium';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] inside component will mount');
    }

    componentDidMount() {
        console.log('[Person.js] inside component Did mount');
        if(this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] inside render method');
        return (
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                ref={this.inputElement}
                type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
        // return [
        //     <p key="1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]
    }
}

// export default Radium(person);

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;//withClass(Person, 'Person');