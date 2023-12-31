import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CustomLabel from "./Label";
import CustomTextArea from "./TextArea";
import CustomInput from "./Input";
import CustomButton from "./Button";
import Pagination from "./Pagination";
import { useTaskList } from "../context/appContext";
import Title from "./Title";
import SingleTask from "./SingleTask";
import { TaskType } from "../model/types";
import { getCurrentTime } from "../utils";
const TaskForm = () => {
  const [formValues, setFormValues] = useState<any>({
    task: "",
    desc: "",
    id:" ",
    time:''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(4)
  

  const[error, setError] = useState<string>('')
  const {editTask, allTasks, setEditTask,handleEdit, setAllTasks, clearList} = useTaskList();

  const { task, desc } = formValues;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setError('');
    setFormValues({ ...formValues, [name]: value });
  };
 
  useEffect(()=>{
    if(editTask !== null){
     setFormValues(editTask)
    }else{
      setFormValues({
        task: "",
    desc: "",
    id:" ",
    time:''
      })
    }
  },[editTask])
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
   if(!task ||!desc){
    setError('Please submit all values')
   } else{
    let newTask = {
      task,
      desc,
      time: getCurrentTime(),
      id: Date.now(),
    };
  
   
    if(editTask.id){
      let newTask = {
        task,
        desc,
        time: getCurrentTime(),
        id: formValues.id,
      };
      handleEdit(newTask)
      setEditTask(
        {
          id:'',
        time:'',
        desc:'',
        task:''
        }
      )
      toast.success('Task edited succesfully')
     setFormValues({
      task: "",
      desc: "",
     
      })
     
     
    }else{
      setAllTasks([...allTasks, newTask]);
      toast.success('Task created succesfully')
      setFormValues({
      task: "",
      desc: "",
     
      })
     
    }
   }
    
   
  };

  const lastIndex = currentPage * tasksPerPage;
  const firstIndex= lastIndex -  tasksPerPage;
  const tasks = allTasks.slice(firstIndex, lastIndex);

 const handlePaginate = (pageNumber:number)=>{
  setCurrentPage(pageNumber)
 }
  return (
    <div className=" w-full lg:w-[60%] my-16 m-auto bg-white p-5 rounded-[10px] shadow-lg shadow-[rgba(0, 0, 0, 0.25)] w-full lg:max-w-[900px]">
      <form
        onSubmit={handleSubmit}
        className="w-full border-b-[1px] border-gray-300 pb-2"
      >
        <div>
          <Title title={editTask.id  ? "Edit Task": "Add Task"} />
        </div>
        {error && <p className="text-red-400 my-2">{error}</p>}
        <div className="block lg:flex justify-between gap-8">
          <div className="my-2 w-full lg:w-[40%] ">
            <CustomLabel>Task</CustomLabel>
            <CustomInput
              name="task"
              value={task ? task: ''}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="my-2 w-full lg:w-[60%]">
            <CustomLabel>Description</CustomLabel>
            <CustomTextArea
              row={1}
              name="desc"
              value={desc ? desc: ''}
              onChange={handleChange}
              placeholder="Write a description..."
            />
          </div>
        </div>
        <div className="my-2 flex gap-2">
          <CustomButton>{editTask.id ? "Edit":"Submit"}</CustomButton>
          {allTasks.length > 1 &&  <CustomButton onClick={clearList} className="bg-transparent border-[1px] border-primary-color text-primary-color">Clear list</CustomButton>}
         
        </div>
      </form>
    <div className="my-2">
      {allTasks.length === 0 ? <p>No tasks created</p> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3">
        {tasks.slice().sort((a, b) => parseInt(b.time) - parseInt(a.time)).map((todo:TaskType) =><SingleTask key={todo.id} todo={todo}/>)}
        </div>}
        <Pagination totalTasks={allTasks.length} tasksPerPage={tasksPerPage} handlePaginate={handlePaginate}/>
    </div>
    </div>
  );
};

export default TaskForm;
