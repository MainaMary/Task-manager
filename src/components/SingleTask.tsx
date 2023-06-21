import { useState } from 'react'
import { TaskType } from '../model/types'
import {AiFillDelete,AiFillEdit} from "react-icons/ai"
import { useTaskList } from '../context/appContext'
import ConfirmModal from './ConfirmModal'
interface Prop{
  todo:TaskType
}

const SingleTask = ({todo}:Prop) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const {findTask} = useTaskList()
  const handleModal = () =>{
    setShowModal(prev => !prev)
  }
  return (
    <>
    <div className='bg-blue-100 px-5 py-2 my-2 rounded-[10px] shadow-lg shadow-[rgba(0, 0, 0, 0.25)] w-full lg:max-w-[900px] '>
     <div className='flex gap-4 justify-between h-auto items-center'>
      <div className="w-[90%]">
        <p className='text-primary-color text-md font-medium'>{todo.task}</p>
        <p className="text-gray-900 text-base font-regular">{todo.desc}</p>
        <p className="text-gray-600 text-sm font-regular">{todo.time}</p>
      {/* <p className="text-gray-600 text-sm font-regular">{editTask.id ? `Updated: ${todo.time}`:`Created: ${todo.time}`}</p> */}
     
      </div>
      <div className='text-primary-color w-[10%] text-left cursor-pointer flex h-auto items-center gap-2 '>
      <AiFillDelete onClick={handleModal} size={20}/>
      <AiFillEdit onClick={() =>findTask(todo.id)} size={20}/>
      </div>
     </div>
    </div>
    {showModal && <ConfirmModal showModal={showModal} handleModal={handleModal} id={todo.id}/> }
    </>
    
  )
}

export default SingleTask