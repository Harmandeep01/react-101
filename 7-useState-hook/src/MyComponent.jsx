import React, {useState} from "react";


function MyComponent(){

    const [name, setName] = useState("Hej!");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

   const updateName = () => {
        setName('Spongebob')
        console.log(name)
   }

   const incrementAge = () => {
        setAge(age + 1)
   }

   const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed)
   }
    
    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button onClick={incrementAge}>Increment</button>

            <p>Is employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Employed</button>
        </div>
    )
}

export default MyComponent;