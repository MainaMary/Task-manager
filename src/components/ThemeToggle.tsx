import {MdDarkMode,MdOutlineLightMode} from"react-icons/md"
import { useTaskList } from "../context/appContext"
const ThemeToggle = () => {
const {setTheme, theme} = useTaskList()
const handleThemeToggle = () =>{
  setTheme(theme === "light" ? "dark":"light") 
}
  return (
    <div onClick={handleThemeToggle}>
        {theme === "light" ? <MdOutlineLightMode/> : <MdDarkMode/>}
    </div>
  )
}

export default ThemeToggle