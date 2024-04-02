import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../app/reducers";

export default function Todotitle({ id, text, checked }) {
  const [pop, setpop] = useState(false);
  const [check, setcheck] = useState(checked);
  const dispatch = useDispatch();
  const onCheck = () => {
    console.log("checked")
    dispatch(updateTodo({check,todoId:id}));
  };
  useEffect(()=>{
    if(check===checked){
      return
    }
    onCheck()
  },[check])
  const handleDelete=()=>{
    dispatch(removeTodo(id))
  }
  return (
    <div
      className="w-full flex gap-x-4 rounded-lg items-center hover:scale-105 hover:border-l-2 border-l-emerald-400 hover:drop-shadow-[0_0_1px_blue] bg-gray-800  transition-all duration-150 md:px-5 py-3 justify-between "
      onMouseEnter={() => setpop(true)}
      onMouseLeave={() => setpop(false)}
    >
      <p 
        className="text-2xl px-2  text-white w-[80%] break-words text-wrap"
        style={{ fontFamily: "ubuntu" }}
      >
        {text}
      </p>
      <div className="flex-1 flex justify-end gap-x-4 px-2">
        <img
          onClick={handleDelete}
          src="/trash.png"
          alt="delete"
          className={` absolute ${
            pop ? " opacity-100 block translate-y-[-2.5rem] translate-x-[-2rem]" : " opacity-0 hidden"
          } w-8 aspect-square transition-all duration-200 cursor-pointer`}
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
