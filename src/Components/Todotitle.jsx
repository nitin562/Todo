import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../app/reducers";

export default function Todotitle({ id, text, checked }) {
  const [pop, setpop] = useState(false); //to popover delete icon on hover
  const [check, setcheck] = useState(checked); //check marks state
  const dispatch = useDispatch(); 
  const onCheck = () => { //on change in check, updating its todo in store
    dispatch(updateTodo({check,todoId:id}));
  };
  useEffect(()=>{ //on every change in check, update todo in store
    if(check===checked){
      return
    }
    onCheck()
  },[check])
  const handleDelete=()=>{ //delete a todo by reducer removeTodo
    dispatch(removeTodo(id))
  }
  return (
    <div
      className=" relative w-full flex rounded-lg items-center hover:scale-105 hover:border-l-2 border-l-emerald-400 hover:drop-shadow-[0_0_1px_blue] bg-gray-800  transition-all duration-150 md:px-5 py-3 justify-between "
      onMouseEnter={() => setpop(true)}
      onMouseLeave={() => setpop(false)}
    >
      <p 
        className="md:text-2xl text-sm font-thin px-2  text-white w-[80%] break-words text-wrap"
        style={{ fontFamily: "Ubuntu" }}
      >
        {text}
      </p>
      <div className="w-[20%] flex justify-end gap-x-4 px-2">
        <img
          onClick={handleDelete}
          src="/trash.png"
          alt="delete"
          className={` absolute top-[-1rem] ${
            pop ? " opacity-100 block  translate-x-[-2rem]" : " opacity-0 hidden"
          } w-8 hover:drop-shadow-[0_0_1px_#fff] aspect-square transition-all duration-200 cursor-pointer`}
        />
        <div
          className={`border-[1px] border-white cursor-pointer rounded-full w-8 h-8 ${
            check ? "bg-white border-transparent" : "bg-none"
          }`}
          onClick={() => setcheck((prev) => !prev)}
        ></div>
      </div>
    </div>
  );
}
