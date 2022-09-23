import React, { useState, useRef, useLayoutEffect} from "react";

const  useDimension = () => {
    const ref = useRef()
    const [dimensions, setdimensions] = useState({})
    
    useLayoutEffect(() => {
        if (ref.current !== undefined)
            return
            // setdimensions(ref.current.getBoundingClientRect().toJSON())
    }, [])

    return [ref ,dimensions] 
}

export default useDimension