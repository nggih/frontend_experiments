import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

interface TodoInput {
  text: string;
}

function Todo(props: TodoInput) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="w-80 mx-auto mt-5 p-7">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="" onClick={deleteHandler}>delete</button>
      </div>
        { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
