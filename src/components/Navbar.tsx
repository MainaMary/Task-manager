import {IoMdNotifications} from "react-icons/io"
const Navbar = () => {
  return (
    <div className="lg:h-24 lg:px-16 flex justify-between h-auto items-center bg-primary-color text-white text-md">
      <h4>Task Manager</h4>
      <IoMdNotifications size={32}/>
    </div>
  )
}

export default Navbar