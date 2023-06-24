import { BtnProps } from "../model/types"
const CustomButton = (props:BtnProps) => {
const {name, onClick, type, children, disabled, className=''} = props
  return (
    <button  disabled={disabled} className={className} name={name} onClick={onClick} type={type}>{children}</button>
  )
}

export default CustomButton