// import React, { useState, useRef, useLayoutEffect} from "react";

// const  useDimension = (trackCondition = []) => {
//     const ref = useRef()
//     const [dimensions, setdimensions] = useState({})
    
//     useLayoutEffect(() => {
//         if (ref.current !== undefined)
//             setdimensions(ref.current.getBoundingClientRect().toJSON())
//     }, [])

//     return [ref ,dimensions] 
// }

// export default useDimension