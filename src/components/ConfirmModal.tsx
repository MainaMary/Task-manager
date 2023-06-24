import { toast } from "react-toastify";
import CustomModal from "./Modal"
import CustomButton from "./Button";
import { useTaskList } from "../context/appContext";
interface ModalProps{
    showModal: boolean;
    handleModal: () =>void;
    id:string
}
const ConfirmModal = ({showModal, handleModal, id}:ModalProps) => {
  if(!showModal) return null
 const {handleDelete} = useTaskList()
    return (
    <CustomModal>
        <form className=" text-center m-auto w-[70%] lg:w-[20%] bg-white p-5 rounded-[10px] shadow-lg shadow-[rgba(0, 0, 0, 0.25)]">
            <p className="text-2xl cursor-pointer text-right" onClick={handleModal}>x</p>
            <p className="text-center  my-2">Are you sure you want to delete this task?</p>
            <div className="flex my-3 m-uto justify-center gap-2">
                <CustomButton onClick={handleModal}>Cancel</CustomButton>
                <CustomButton className="bg-red-500 text-white" onClick={() =>{handleDelete(id),  toast.success('Task deleted succesfully')}}>Delete</CustomButton>
            </div>
       
        </form>
        
    </CustomModal>
  )
}

export default ConfirmModal