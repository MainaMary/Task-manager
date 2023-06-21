import { useState } from 'react'
import { TaskType } from '../model/types'
import {AiFillDelete,AiFillEdit} from "react-icons/ai"
import { useTaskList } from '../context/appContext'
import ConfirmModal from './ConfirmModal'
import Title from './Title'
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
    <div className='bg-blue-100 p-5 my-2 rounded-[10px] shadow-lg shadow-[rgba(0, 0, 0, 0.25)] w-full lg:max-w-[900px] '>
      <Title title={todo.task}/>
      <p>{todo.time}</p>
      <p>{todo.desc}</p>
      <div className='flex h-auto items-center gap-2 '>
        <AiFillDelete onClick={handleModal}/>
        <AiFillEdit onClick={() =>findTask(todo.id)}/>
      </div>
    </div>
    {showModal && <ConfirmModal showModal={showModal} handleModal={handleModal} id={todo.id}/> }
    </>
    
  )
}

export default SingleTask