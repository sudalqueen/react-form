import {useState} from 'react';

const useFieldElement = (initValue) => {
    const [value, setValue] = useState(initValue)

    const handleChange=event=>{
        setValue(event.target.value)
    }

    return {value, handleChange}
}

export default useFieldElement;