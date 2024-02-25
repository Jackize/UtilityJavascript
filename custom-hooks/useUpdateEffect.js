import React, { useEffect, useRef } from 'react'


// This component will excute cb after dependencies change, it will avoid excute when mount
// example after call api update, we will use it hook to call Toast
const useUpdateEffect = (cb, dependencies) => {
    const firstRenderRef = useRef(true)

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }

        return cb()
    }, dependencies)

}

export default useUpdateEffect


// Example

// const [count, setCount] = useState(10)
// will alert after count change, if useEffect, it will alert in first time mount
// useUpdateEffect(() => alert(count), [count])

// onclick={() => setCount(c => c + 1)}