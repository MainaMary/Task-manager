import { TextAreaProps } from "../model/types"

const CustomTextArea = ({name, placeholder, value, onChange}:TextAreaProps) => {
  return (
    <textarea name={name} onChange={onChange}  value={value} id="editor" rows={8} className=" bg-gray-50 border border-gray-300 text-gray-900  rounded-sm block w-full text-sm  dark:text-white dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500  p-2" placeholder={placeholder} ></textarea>
  )
}

export default CustomTextArea