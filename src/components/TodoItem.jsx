import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

const TodoItem = ({ todo , toggle, deleteTodo }) => {
  return (
    <div className='w-full flex items-center p-4  gap-2 border-b border-[#8FABD4]  cursor-pointer select-none' onClick={()=>toggle(todo.id)}>
    {todo.isComplate ? <FaCheckCircle className='text-green-500 size-6 hover:scale-110 transition-all items-center' /> : <FaRegCircle className='text-gray-500 size-6 hover:scale-110 transition-all items-center' />}
        <p className={`flex-1 text-[black] ${todo.isComplate ? "line-through text-gray-500" : ""}`}>{todo.text}</p>
    <RiDeleteBin5Line className='text-red-700 size-6 hover:scale-110 transition-all items-center' onClick={()=>deleteTodo(todo.id)} /></div>
  )
}

export default TodoItem