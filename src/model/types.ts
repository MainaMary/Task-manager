import { ReactNode } from "react";
export interface Inputprops {
    onChange: (x:any)=> void;
    type:string;
    name?: string;
    placeholder? :string;
    value?: string | number ;
    min?:number;
    max?: number;
    accept?: string;
    required?:boolean;
    multiple?: boolean;
    className?: string;
  
  }
  export interface LabelProps {
    children:string
  }

export interface ModalProps {
    children: ReactNode;
}
export interface BtnProps {
    name?:string ;
    icon?: ReactNode;
    onClick?:(x:any)=>void;
    type?: "button" | "submit" | "reset";
    children?: string | ReactNode,
    className?: string,
    disabled?: boolean

}
export interface TextAreaProps {
  name:string,
  value: string,
  onChange: (x:any) =>void,
  placeholder: string,
  row: number
  }