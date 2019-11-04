import {useState, useRef} from 'react';

const useFieldElement = (initValue) => {
    const [value, setValue] = useState(initValue)

    const handleChange=event=>{
        setValue(event.target.value)
    }

    const ref = useRef();

    return {value, ref, handleChange}
}

export default useFieldElement;