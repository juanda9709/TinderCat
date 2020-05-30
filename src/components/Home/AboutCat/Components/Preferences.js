import React from 'react'

export const Preferences = () => (
    <div className="preferences-container">

    <hr/> <h3> Preferences </h3> <hr/>
   
    <div>
        <form className="RadioBoton">
            <div>
                <label>Male </label>
                <input type="radio" value="Gato" name="gender" />
            </div>
            <div>
                <label>Female </label>
                <input type="radio" value="Gata" name="gender" />
            </div>

        </form>
    </div>

    </div>
)
