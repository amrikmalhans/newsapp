import { useState } from 'react'

function useFormState(initialVal) {
    const [state, setState] = useState(initialVal);

    const handleChange = e => {
        setState(e.target.value)
    }

    const reset = () => {
        console.log(state);
        setState("")
    }

    return [state, handleChange, reset]
}

export default useFormState;
