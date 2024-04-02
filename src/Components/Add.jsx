import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/reducers";
export default function Add({ show, changeShow }) {
  const [todo, settodo] = useState(""); //todo textarea
  const handleClose = () => changeShow(false); //close the modal
  const dispatch=useDispatch() 
  const handleSave=()=>{  //Save the todo using reducer
    dispatch(addTodo({todo,check:false}))
    settodo('')
    changeShow(false)
  }
  return (
    <Modal //bootstrap
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="backdrop-blur-md bg-slate-700/10"
    >
      <Modal.Header closeButton>
        <Modal.Title>Insert a Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          value={todo}
          onChange={(e) => settodo(e.target.value)}
          placeholder="Write your Todo"
          className="w-full  border-[1px]  outline-none bg-slate-900 p-2 text-white resize-none text-md "
          cols="30"
          rows="10"
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        {/* Close and save todo buttons in footer */}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}> 
          Save Todo 
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
