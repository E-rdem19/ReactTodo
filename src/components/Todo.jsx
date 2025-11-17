import React, { useEffect } from 'react'
import { IoIosListBox } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FcProcess } from "react-icons/fc";
import TodoItem from './TodoItem';

const todo = () => {

  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("todos")) || []);
  const data=React.useRef();
  const addTodos = () => {
    const inputText=data.current.value.trim();
    if(inputText.length===0){
      return;
    }
    const newTodo={
      id:todos.length + 1,
      text:inputText,
      isComplate:false
    };
    setTodos((prev)=>[...prev,newTodo]);
    data.current.value="";
  };

    const toggle=(id)=>{
    setTodos((prev)=>
      prev.map((todo)=>
        todo.id===id ? {...todo,isComplate:!todo.isComplate} : todo
      )
    );  
    };

    const deleteTodo=(id)=>{
      setTodos((prev)=>{
        return prev.filter((todo)=> todo.id !== id)
      });

    }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='place-self-center bg-white w-[500px] h-[700px] p-12 flex-col rounded-xl shadow-lg '>
        {/* Başlık  Kısmı */}
       <h1 className='text-2xl font-semibold tracking-wide flex gap-2 items-center justify-center' ><IoIosListBox />Todo App</h1>
       {/* Arama Kısmı */}
       <br />
       <div className='flex bg-[#4A70A9]  rounded-full gap-2 items-center p-3 '>
        <input
         ref={data}
         type="text" placeholder='Yeni bir görev gir:' className='border-none outline-none rounded w-[330px] h-[45px] bg-transparent p-1 placeholder:text-black'/>
        <div onClick={addTodos}>
          <IoIosAddCircle  className='w-[50px] h-[45px] border-none rounded-lg left-20 bg-transparent text-white rounded-br-full justify-center cursor-pointer hover:scale-110 transition-all' />
       </div > 
        </div>
        <br />
       <h2 className='font-medium text-2xl flex gap-2 items-center'><FcProcess />Görevler</h2>
       <div>
        <br />
        {
          todos.map((todo)=>(
            <TodoItem  key={todo.id} todo={todo} toggle={toggle} deleteTodo={deleteTodo} />
          ))
        }
       
       </div>

    </div>
  )
}

export default todo