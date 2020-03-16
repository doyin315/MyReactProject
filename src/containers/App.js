import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons'
class App extends Component {
  state = {
    persons: [
      { id: 'sda', name: 'Max', age: 28},
      { id: 'dfd', name: 'Manu', age: 29},
      { id: 'daa', name: 'Stephen', age: 26}
    ],
    showPersons: false,
    words: ''
  }
  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephen', age: 27}
      ]

    })
  }
  nameChangedHandler =(event, id) =>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex]=person
    console.log(persons)
    this.setState({
      persons: persons
    })



    // this.setState({
    //   persons: [
    //     { id: 'sda', name: 'Max', age: 28},
    //     { id: 'dfd', name: event.target.value, age: 29},
    //     { id: 'daa', name: 'Stephen', age: 27}
    //   ]
    // })
  }

  deletePersonHandler = (index)=>{
    // const persons =this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(index,1)
    this.setState({persons:persons})

  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
   
  // lengthchanger=(event)=>{
  //   this.setState({
  //     words: event.target.value
  //   })
  // }
  // deleteword= (id)=>{
  //   const NewWord = this.state.words.split('');
  //   NewWord.splice(id,1);
  //   const updated= NewWord.join('')
  //   this.setState({words: updated})
  //  }
  render(){
    // const charlist = this.state.words.split('').map((ch,id) =>{
    //   return <Char character={ch} key={id} del={()=>this.deleteword(id)}/>
    // })

    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null
    // const words= this.state.words;
    // const len= words.length;

    if (this.state.showPersons) {
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
      persons =  <div>
        <Persons persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
      {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!!')} 
        changed={this.nameChangedHandler}>
          My hobbies: Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
    </div>
    }
    const classes = [];
    if (this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold')
    }
  return (
    <StyleRoot>
      <div className="App">
      <h1>React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      {/* <input onChange={this.lengthchanger} type="text" value={this.state.words}  />
    <p>{len}</p>
      <Validation size={len} />
      {charlist} */}
      </div>
    </StyleRoot>
  );
  // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work'))
}

}
export default Radium(App);
