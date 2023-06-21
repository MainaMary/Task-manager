import {IoMdNotifications} from "react-icons/io"
import { useTaskList } from "../context/appContext"
const Navbar = () => {
  const {allTasks} = useTaskList()
  return (
    <div className="lg:h-24 lg:px-16 flex justify-between h-auto items-center bg-primary-color text-white text-md">
      <h4>Task Manager</h4>
      <div className="relative">
      <IoMdNotifications size={32}/>
      {allTasks.length > 0 ?  <p>{allTasks.length}</p> :''}
     
      </div>
      
    </div>
  )
}

export default Navbar