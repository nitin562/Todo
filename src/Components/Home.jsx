import React, { useEffect, useState } from "react";
import Add from "./Add";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Todotitle from "./Todotitle";
import { deleteAll, setTodoArr } from "../app/reducers";
import AlertComp from "./AlertComp";

export default function Home() {
  const [show, setshow] = useState(false);  //open modal
  const [openAlert, setopenAlert] = useState(false); //open Alert message
  const dispatch = useDispatch(); //use to change state in store
  const AddTodo = () => setshow(true); //open modal
  const todoState = useSelector((state) => state.todos); //getting state
  const handleLoad = () => {  //loading if already todos are present in local storage
    if (localStorage.getItem("Todos")) {
      const todoArr = JSON.parse(localStorage.getItem("Todos"));
      dispatch(setTodoArr(todoArr));
    }
  };
  const handleReload = () => { //storing in local storage on refresh
    const objToString = JSON.stringify(todoState);
    localStorage.setItem("Todos", objToString);
  };
  const handleSave = () => { //Manually storing by save button in localStorage
    handleReload();
    setopenAlert(true);
    setTimeout(() => {
      setopenAlert(false);
    }, 2000);
  };
  useEffect(() => { //loading todos on mounting
    handleLoad();
  }, []);
  useEffect(() => { //adding eventlistener for refreshing browser to save todos
    window.addEventListener("beforeunload", handleReload);
    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, [todoState]);
  return (
    <div className="w-screen h-screen px-2 gap-y-8 bg-black  flex flex-col  p-2 md:pb-5">
      <AlertComp show={openAlert} />
      <div className="w-full flex justify-between items-center">
        <p className=" font-extralight text-5xl text-blue-400 indent-8 p-2 ">
          to<span className="text-emerald-400 ">do</span>s
        </p>
        <div className="flex gap-x-4">
          {/* Save and delete all button */}
          <button
            className="border-[1px] text-md md:text-2xl px-2 p-1 md:p-2 rounded-lg border-white hover:bg-sky-800 hover:text-sky-400 font-thin text-white"
            style={{ fontFamily: "ubuntu" }}
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="w-fit border-[1px] text-md md:text-2xl p-2 rounded-lg border-red-500 hover:bg-red-600 font-thin hover:text-white text-white"
            style={{ fontFamily: "ubuntu" }}
            onClick={()=>dispatch(deleteAll())}
          >
            Delete All
          </button>
        </div>
      </div>
      <div className="w-full md:w-3/4 mx-auto pt-8 flex flex-col gap-y-8  px-5 md:px-7 flex-1 bg-stone-900 scrollbar overflow-y-scroll overflow-x-hidden">
        {/* Showing todos here */}
        {todoState.map((todo) => { 
          return (
            <Todotitle
              key={todo.id}
              id={todo.id}
              text={todo.todo}
              checked={todo.check}
            />
          );
        })}
      </div>
        {/* Add button to add todo */}
      <Add show={show} changeShow={setshow} />
      <button
        className="w-[3.5rem] absolute bottom-4 right-4 hover:scale-110 transition-all duration-300 rounded-full "
        onClick={AddTodo}
      >
        <img src="/add.png" alt="Add todo" className="w-full aspect-square" />
      </button>
    </div>
  );
}
