import React, { useEffect } from 'react'
import useTimeout from './useTimeout'

const useDebounce = (cb, delay, dependencies) => {
    const { reset, clear } = useTimeout(cb, delay)
    useEffect(reset, [...dependencies, reset])
    
    // clear in the first time mount, because first time mount it will exucte
    useEffect(clear, [])

}

export default useDebounce

// const [count, setCount] = useState(10)
// it will alert count when count change after 1 second
// useDebounce(()=> alert(count), 1000, [count])