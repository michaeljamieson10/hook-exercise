import { useState } from "react";

function useFlip(initialVal = true) {
    const [isUp, setIsUp] = useState(initialVal);
    const flip = () => {
        setIsUp(isUp => !isUp);
    }
    
    // return piece of state AND a function to flip it
    return [isUp, flip];
};


export default useFlip;
