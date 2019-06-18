import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }
    
    componentWillMount() {
    console.log('[Persons.js] inside component will mount');
    }
    
    componentDidMount() {
    console.log('[Persons.js] inside component Did mount');
    }

    componentWillReceiveProps ( nextProps ) {
        console.log('[Update Persons.js] inside component will receive props', nextProps);
    }

    // shouldComponentUpdate( nextProps, nextState ) {
    //     console.log('[Update Persons.js] inside component should update', nextProps,  nextState);
    //     return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked ;
    //     // return true;
    // }

    componentWillUpdate(nextProps,  nextState) {
        console.log('[Update Person.js] inside componentwillupdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Update Persons.js] inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] inside render method');
        return this.props.persons.map((person, index) => {
            return <Person 
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
          });
    }
}

export default Persons;