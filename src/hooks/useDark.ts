import { useState } from "react";

const useDarkMode =()=>{
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleToggle = () =>{
        setIsDarkMode(prev =>!prev)
    }
return {isDarkMode, handleToggle}
}