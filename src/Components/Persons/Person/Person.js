import React, {Component} from 'react';
import classes from  './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
// import Radium from 'radium';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] inside component will mount');
    }

    componentDidMount() {
        console.log('[Person.js] inside component Did mount');
    }

    render() {
        console.log('[Person.js] inside render method');
        return (
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
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
export default withClass(Person, 'Person');