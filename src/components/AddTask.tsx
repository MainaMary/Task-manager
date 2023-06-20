import { useState } from "react";
import CustomLabel from "./CustomLabel";
import CustomTextArea from "./CustomTextArea";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Title from "./Title";
const AddTask = () => {
 const [formValues, setFormValues] = useState({
    task:'',
    desc:'',
   
    
 })
 const {task,desc} = formValues
  const handleChange = (e:any) =>{
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})

  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[35%] mt-24 m-auto bg-white p-5 rounded-[10px] shadow-lg shadow-[rgba(0, 0, 0, 0.25)] w-full lg:max-w-[900px]"
    >
        <div>
            <Title title="Add Task"/>
        </div>
      <div className="my-2">
        <CustomLabel>Task</CustomLabel>
        <CustomInput name="task" value={task} onChange={handleChange} type="text"/>
      </div>
      <div className="my-2">
        <CustomLabel>Description</CustomLabel>
        <CustomTextArea name="task" value={desc} onChange={handleChange} placeholder="Write a description..."/>
      </div>
      <div className="my-2">
        <CustomButton>Submit</CustomButton>
      </div>
    </form>
  );
};

export default AddTask;
