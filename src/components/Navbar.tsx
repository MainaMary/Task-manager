import {IoMdNotifications} from "react-icons/io"
import { useTaskList } from "../context/appContext"
const Navbar = () => {
  const {allTasks} = useTaskList()
  return (
    <div className="h-24   px-8 lg:px-16 flex justify-between  items-center bg-primary-color text-white text-md">
      <h4 className="font-medium text-2xl">Task Manager</h4>
      <div className="relative">
      <IoMdNotifications size={32}/>
      {allTasks.length > 0 ?  <p className=" top-[-16px] left-4 border-[2px] border-black w-[30px] h-[30px] rounded-full absolute flex items-center justify-center text-md font-medium">{allTasks.length}</p> :''}
     
      </div>
      
    </div>
  )
}

export default Navbar