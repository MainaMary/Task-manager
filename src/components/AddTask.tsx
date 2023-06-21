import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CustomLabel from "./CustomLabel";
import CustomTextArea from "./CustomTextArea";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useTaskList } from "../context/appContext";
import Title from "./Title";
import SingleTask from "./SingleTask";
import { TaskType } from "../model/types";
const AddTask = () => {
  const [formValues, setFormValues] = useState<any>({
    task: "",
    desc: "",
    id:" ",
    time:''
  });
  const {editTask, allTasks, setEditTask,handleEdit, setAllTasks, clearList, isComplete, setIsComplete } = useTaskList();

  const { task, desc } = formValues;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  function getCurrentTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes: number | string = currentTime.getMinutes();
    let amOrPm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
 
    minutes = minutes < 10 ? '0' + minutes : minutes;
  

    const time = hours + ':' + minutes + ' ' + amOrPm;
  
    return time;
  }
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
  console.log(formValues)
  console.log(editTask)
  const handleSubmit = (event: any) => {
    event.preventDefault();

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
      console.log('edit')
     
    }else{
      setAllTasks([...allTasks, newTask]);
      toast.success('Task created succesfully')
      setFormValues({
      task: "",
      desc: "",
     
      })
      console.log('submit')
    }
   
  };
  console.log(allTasks);

  return (
    <div className=" w-full lg:w-[60%] mt-16 m-auto bg-white p-5 rounded-[10px] shadow-lg shadow-[rgba(0, 0, 0, 0.25)] w-full lg:max-w-[900px]">
      <form
        onSubmit={handleSubmit}
        className="w-full border-b-[1px] border-gray-300 pb-2"
      >
        <div>
          <Title title={editTask.id  ? "Edit Task": "Add Task"} />
        </div>
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
        {allTasks.map((todo:TaskType) =><SingleTask key={todo.id} todo={todo}/>)}
        </div>}
    </div>
    </div>
  );
};

export default AddTask;
