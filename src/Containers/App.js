import React, {Component} from 'react';
import './App.css';
import Person from '../Components/Persons/Person/Person';
// import Radium, {StyleRoot} from 'radium';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons : [
      { id:"weri1", name: "Max", age: 45},
      { id:"twe1", name: "Ajit", age: 45},
      { id:"fdsfs11", name: "Rajib", age: 45}
    ],
    otherstate : "some other value",
    showPersons :  false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
// const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;
    this.setState({ persons : newPersons});
  }
  
deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    // const style={
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // ':hover': {
    //   //   backgroundColor:'lightgreen',
    //   //   color: 'black'
    //   // }
    // }

    let persons = null;
    
    //let classes = ["red", "bold"].join(' ');
    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed = {this.nameChangeHandler}
          />
          
        </div> 
      );
     
      // style.backgroundColor = "red";
      // style[':hover']= {
      //   backgroundColor:'lightred',
      //   color: 'black'
      // };
    }
    return (
      // <StyleRoot>
      <div className="App">
        <Cockpit 
        appTitle = {this.props.title}
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        clicked = {this.togglePersonHandler}
        />
        {persons}
      </div>  
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am React App!!'));
  }
}


// export default Radium(App);//using radium
export default App;
