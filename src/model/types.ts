import { ReactNode } from "react";
import { CSSProperties } from "react";
export interface Inputprops {
    onChange: (x:any)=> void;
    type:string;
    name?: string;
    placeholder? :string;
    value?: string
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
  export type TaskType = {
    task: string;
    desc: string;
    time: string;
    id:string
  }
  export interface AppTheme{
    dark: CSSProperties;
    light: CSSProperties;
    common?: CSSProperties;
  }