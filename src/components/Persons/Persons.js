import React from 'react'; 
import Person from './Person/Person'; 
const persons = (props) => props.persons.map((person, index) =>{
     return <Person
    click={()=>props.clicked(index)}
    changed= {(event)=>{props.changed(event, person.id)}}
    key={person.id}
    name= {person.name} age={person.age}/>})

export default persons; 
