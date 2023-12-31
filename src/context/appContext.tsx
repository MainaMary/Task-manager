import { ReactNode, useState, createContext, useEffect, useContext } from "react";
import { TaskType } from "../model/types";
interface Props {
    children: ReactNode
}
interface initialStateType {
    allTasks: TaskType[],
    setAllTasks: any,
    isComplete: boolean,
    setIsComplete: any,
    setEditTask: any,
    handleDelete: (x: string) => void,
    clearList: () => void,
    findTask: (x: string) => void,
    editTask: {
        id: string,
        time: string,
        desc: string,
        task: string
    },
    handleEdit: (x: TaskType) => void,
    theme:string,
    setTheme:any

}

const TaskList = createContext<
    initialStateType
>({
    allTasks: [],
    isComplete: false,
    setAllTasks: [],
    setEditTask: {},
    setIsComplete: [],
    handleDelete: () => { },
    clearList: () => { },
    findTask: () => { },
    editTask: {
        id: '',
        time: '',
        desc: '',
        task: ''
    },
    handleEdit: () => { },
    theme:"light",
    setTheme:{}
})
export const useTaskList = () => {
    return useContext(TaskList)
}

const TaskListProvider = ({ children }: Props) => {

    const initialState = localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks') || '')
        : []
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [allTasks, setAllTasks] = useState<any>(initialState);
    const [editTask, setEditTask] = useState<TaskType>(initialState)
    const [theme, setTheme] = useState<string>('light')




    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(allTasks))
    }, [allTasks])
    const handleDelete = (id: string) => {
        const filteredTasks = allTasks.filter((task: TaskType) => task.id !== id)
        setAllTasks(filteredTasks)
    }
    const clearList = () => {
        setAllTasks([])
    }
    const findTask = (id: string) => {
        const task = allTasks.find((task: TaskType) => task.id === id)
        setEditTask(task)
    }
    const handleEdit = (formValues: TaskType) => {
        const { id, task, desc, time } = formValues
        const newTasks = allTasks.map((todo: TaskType) => todo.id === id ? { task, id, desc, time } : todo);
        setAllTasks(newTasks)
    }

    return <TaskList.Provider value={{ theme, setTheme,findTask, setEditTask, handleEdit, editTask, isComplete, setAllTasks, setIsComplete, allTasks, handleDelete, clearList }}>{children}</TaskList.Provider>

}
export default TaskListProvider