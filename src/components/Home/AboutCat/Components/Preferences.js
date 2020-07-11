import React, {useState, useEffect} from 'react'



export const Preferences = ({ gender, onChange }) => {

    
    const [genderSelected, setGenderSelected] = useState(gender)
    
    useEffect(() => {
        onChange(genderSelected)
    }, [genderSelected])


return (
    <div className="preferences-container">

    <hr/> <h3> Preferences </h3> <hr/>
   
    <div>
        <form className="RadioBoton">
            <div>
                <label>Male </label>
                <input checked={genderSelected == 'M'} type="radio" value="M" name="gender" onChange={(g) => setGenderSelected(g.target.value)}/>
            </div>
            <div>
                <label>Female </label>
                <input checked={genderSelected == 'F'} type="radio" value="F" name="gender" onChange={(g) => setGenderSelected(g.target.value)} />
            </div>

        </form>
    </div>

    </div>
)
}