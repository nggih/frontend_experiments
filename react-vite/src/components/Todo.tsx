import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

interface TileCard {
  text: string;
}

function Todo(props: TileCard) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="" onClick={deleteHandler}>delete</button>
      </div>
        { modalIsOpen && <Modal />}
        { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
