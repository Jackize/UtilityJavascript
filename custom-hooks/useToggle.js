import React from 'react'

const useToggle = (defaultValue) => {
    const [defaultValue, setDefaultValue] = useState(defaultValue)

    function toggleValue(value) {
        setDefaultValue(currentValue => typeof value === 'boolean' ? value : !currentValue)
    }

    return [value, toggleValue]
}

export default useToggle


// const [value, toggleValue] = useToggle(false)
// onClick={toggleValue}
// onClick={()=>toggleValue(true)}
// onClick={()=>toggleValue(false)}