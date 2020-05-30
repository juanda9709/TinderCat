import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const createSlider = Slider.createSliderWithTooltip
const Range = createSlider(Slider.Range);


export const PreferencesAge = () => {

    const onChange = () => {
        
    }

    return (
    <div className = "preferences-age">
        <h4> Choose age range: </h4>
        <Range onChange={ onChange } min = {1} max = {15} defaultValue={[5,10]} tipFormatter={ value => `${ value } age`} />
        </div>
    )

}