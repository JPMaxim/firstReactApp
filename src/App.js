import React, {useState} from "react"
import {Person} from "./components/Person"
import {NetflixContainer} from "./components/NetflixContainer"
import {BbcNewsContainer} from "./components/BbcNewsContainer"
import {GalleryContainer} from "./components/GalleryContainer"
import "./App.css"
import {Counter} from "./components/Counter"
import {Form} from "./components/Form"



// This is a react FUNCTIONAL component
// There are also react class components but they're not so used anymore
export function App() {

  // --------------Person State----------------
  const [persons, setPersons] = useState([
    {name:'Dave', age: 29, petType: "Dog", petName: "Alfie"},
    {name:'Leon', age: 33, petType: "Cat", petName: "Mia"},
    {name:'Lucy', age: 25, petType: "Parrot", petName: "Peter"}
  ]);
  // --------------First Component Remove----------------
  function handleClick(index) {
    // make a copy of state
    let storedPeople = [...persons];
    // change it
    storedPeople.splice(index, 1);
    // update state
    setPersons(storedPeople)
  }

  // --------------Counter State----------------
  const [count, setCount] = useState(0);
  function countIncrement() {
    setCount(count + 1)
  }
  function countDecrement() {
    setCount(count - 1)
  }

  // --------------Form----------------
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')
  const [petTypeInput, setPetTypeInput] = useState('')
  const [petNameInput, setPetNameInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page from refreshing
    setPersons([
      ...persons, 
      {name: nameInput, age: parseInt(ageInput), petType: petTypeInput, petName: petNameInput}
    ])
    setNameInput('')
    setAgeInput('')
    setPetTypeInput('')
    setPetNameInput('')
  }

  return (
    <div>
      {/* ---------first functional component---------- */}
      <h1>My First Functional Component</h1>
      <h3>Click the following headings to delete them</h3>
      {persons.map((person, index) => {
        return <Person 
          name={person.name} 
          age={person.age} 
          petType={person.petType} 
          petName={person.petName} 
          key={index} 
          handleClick={() => handleClick(index)}
        />
      })}

      {/* ------------Components Activity----------- */}
      <h1 className="heading">Components Activity</h1>
      <NetflixContainer />
      <BbcNewsContainer />
      <GalleryContainer />
      
      {/* ------------Counter Activity----------- */}
      <h1 className="heading">Counter Activity</h1>
      <Counter 
        count={count}
        countIncrement={() => countIncrement()}
        countDecrement={() => countDecrement()}
      />

      {/* ------------Form - Conditional Rendering ----------- */}
      <h1 className="heading">Conditional Rendering: Form</h1>
      <Form 
        handleSubmit = {handleSubmit} 
        nameInput = {nameInput}
        setNameInput = {setNameInput}
        ageInput = {ageInput} 
        setAgeInput = {setAgeInput}
        petTypeInput = {petTypeInput} 
        setPetTypeInput = {setPetTypeInput}
        petNameInput = {petNameInput} 
        setPetNameInput = {setPetNameInput}
      />
    </div>
  )
  // ====================================================================================================
  // const [userName, setUserName] = useState('')

  // const handlerSubmit = (e) => {
  //     e.preventDefault() //stops rerender of component
  //     alert(`welcome ${userInput}`)
  // }
  
  // return (
  //   <div>
  //     <h1>Heading</h1>
  //     <Form />

  //   </div>
  // )

// ======================================================================================================
  // const [persons, setPersons] = useState([
  //   {name: 'Dave', age: 33},
  //   {name: 'Karen', age: 45},
  //   {name: "Steve", age: 40},
  // ]);

  // let deleteHandler = (index) => {
  //   let updatedArray = [...persons]
  //   updatedArray.splice(index,1)
  //   setPersons(updatedArray)
  // }
  
  // return (
  //   <div className="App">
  //     <div>
  //       <h1>My React Project</h1>
  //       {/* <Person name={persons[0].name} age={persons[0].age} petName="Alfie" type="dog" />
  //       <Person name={persons[1].name} age={persons[1].age} petName="Mia" type="cat"/>
  //       <Person name={persons[2].name} age={persons[2].age} petName="Nibbles" type="rabbit"/> */}
  //       {persons.map((person, index) => {
  //         return <Person name={person.name} age={person.age} key={index} deleteHandler={() => deleteHandler(index)}/>
  //       })}
  //     </div>
  //   </div>
  // )
}