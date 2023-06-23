import { useState } from "react";
interface PaginateProps {
    tasksPerPage: number;
    totalTasks: number;
    handlePaginate: (x:number) =>void;
}

const Pagination = ({tasksPerPage, totalTasks, handlePaginate}:PaginateProps ) => {
const [page, setPage] = useState('1')
    console.log(totalTasks,'total tasks')
 const pageNumbers = []
 console.log('ceil', Math.ceil(totalTasks/tasksPerPage))
 for (let i=1; i <= Math.ceil(totalTasks/tasksPerPage); i++){
    console.log(i)
    pageNumbers.push(i)
 }
  console.log(pageNumbers,'pageNumbers')
  return (
    <div className="flex m-auto mt-2 justify-center">
        <div>
        <ul className="flex gap-3">
            {pageNumbers.map(number => <li className=" cursor-pointer flex items-center justify-center border-[1px] border-primary-color text-primary-color w-[35px] h-[35px] rounded-sm" key={number} onClick={() =>{handlePaginate(number), setPage(number.toString())}}>{number}</li>)}
        </ul>
        {
            page &&  <p className="text-regular text-md my-1"> Page  <span className="text-primary-color text-bold">{page}</span></p>
        }
      
        </div>
    </div>
    
  )
}

export default Pagination