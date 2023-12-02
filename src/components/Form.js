import { useState } from "react"

export const Form = ({
        handleSubmit, 
        nameInput,
        setNameInput,
        ageInput, 
        setAgeInput,
        petTypeInput, 
        setPetTypeInput,
        petNameInput, 
        setPetNameInput
}) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input 
                        type="text" 
                        value={nameInput}
                        onChange={(e)=> setNameInput(e.target.value)}
                    />
                    <br></br>
                    Enter your age:
                    <input 
                        type="text" 
                        value={ageInput}
                        onChange={(e)=> setAgeInput(e.target.value)}
                    />
                    <br></br>
                    Enter your petType:
                    <input 
                        type="text" 
                        value={petTypeInput}
                        onChange={(e)=> setPetTypeInput(e.target.value)}
                    />
                    <br></br>
                    Enter your petName:
                    <input 
                        type="text" 
                        value={petNameInput}
                        onChange={(e)=> setPetNameInput(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}