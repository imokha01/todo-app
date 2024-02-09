/* eslint-disable react/prop-types */
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../store/todoSlice";
import { useState } from "react";

const TodoList = () => {
    const [completed, setCompleted ] = useState(false)
    const todoList = useSelector(value => value.todo.todoList)
    const handleCompletedTask =() =>{
        setCompleted(prev => !prev)
        console.log(completed)
    } 
    const dispatch = useDispatch()
    console.log(todoList)

  return (
    <div className="w-[25rem] flex flex-col justify-center items-center">
      <ul className="flex flex-col gap-3 w-full justify-center items-center">
        {todoList.map((item) => (
          <li
            key={item.id}
            className="flex justify-between w-full  items-center "
          >
            <span className="flex gap-2 items-center">
              <input type="checkbox" onClick={() => dispatch(completedTodo(item.id))} checked={item.completed} className="checkbox" />
              <p className={`${item.completed ? ' ': ' '}`}>{item.text}</p>
            </span>

            <IoCloseCircleOutline onClick={() => dispatch(deleteTodo(item.id))} className="text-2xl cursor-pointer" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
