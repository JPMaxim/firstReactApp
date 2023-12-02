import {Pet} from "./Pet"

export const Person = ({name, age, petType, petName, handleClick}) => {
    return (
        <div>
            <h2 onClick={handleClick}>My name is {name}, I am {age} years old</h2>
            <Pet petType={petType} petName={petName}/>
        </div>
    )
}