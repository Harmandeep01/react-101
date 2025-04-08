
import React, { useState } from 'react';

function MyComponent(){
    const [car, setCar] = useState({
                            year: 1969,
                            make: "Ford",
                            model: "Mustang"
                        })

/** 
 * The ... (spread operator) is used to create a shallow copy of the existing object.
 * and keep the other properties unchanged.
 * 
*/

    const handelYearChange = (e) => {
        setCar(c => ({...c, year: e.target.value})) // spread operator to copy the existing object and update the year property
        
    }

    const handelMakeChange = (e) => {
        setCar(c => ({...c, make: e.target.value}))
    }

    const handelModelChange = (e) => {
        setCar(c => ({...c, model: e.target.value}))
    }

    return (
        <>
        <div>
            <p>Your Favourite Car is: {car.year} {car.make} {car.model}</p>
            <input type='number' value={car.year} onChange={handelYearChange} /><br/>
            <input type='text' value={car.make} onChange={handelMakeChange} />< br />
            <input type='text' value={car.model} onChange={handelModelChange}/>
        </div>
        </>
    )
}

export default MyComponent;