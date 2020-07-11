import React, {useState, useEffect} from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const createSlider = Slider.createSliderWithTooltip
const Range = createSlider(Slider.Range);


export const PreferencesAge = ({ onChange, age_min=3, age_max=10}) => {

    const [min, setMin] = useState(age_min)
    const [max, setMax] = useState(age_max)
    
    const onChanger = (result) => {
        setMin(result[0])
        setMax(result[1])
    }
    useEffect(() => {        
        onChange(min,max)
    }, [min,max])

    return (
    <div className = "preferences-age">
        <h4> Choose age range: </h4>
        <Range onChange={ onChanger } min = {1} max = {20} defaultValue={[age_min,age_max]} tipFormatter={ value => `${ value } age`} />
        </div>
    )

}