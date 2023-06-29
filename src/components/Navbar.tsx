import { IoMdNotifications } from "react-icons/io"
import { useTaskList } from "../context/appContext"
import ThemeToggle from "./ThemeToggle"
import { AppTheme } from "../model/types"
const Navbar = () => {
  const { allTasks, theme } = useTaskList()
  const headerStyle: AppTheme = {
    dark: {
      background: 'black',
      color: '#ffff'
    },
    light: {
      background: '#eoeoeo',
      color: 'black'
    },
    common: {
      transition: 'all 1s ease'
    }
  }
  const themeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark)
  }
  return (
    <nav style={themeStyle} className="h-24   px-8 lg:px-16 flex justify-between  items-center bg-primary-color text-white text-md">
      <h4 className="font-medium text-2xl">Task Manager</h4>
      <div className="flex h-auto items-center gap-2">
        <ThemeToggle />
        <div className="relative">
          <IoMdNotifications size={32} />
          {allTasks.length > 0 ? <p className=" top-[-16px] left-4 border-[2px] border-black w-[30px] h-[30px] rounded-full absolute flex items-center justify-center text-md font-medium">{allTasks.length}</p> : ''}

        </div>
      </div>


    </nav>
  )
}

export default Navbar