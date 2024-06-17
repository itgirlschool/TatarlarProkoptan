import style from "./App.module.scss";
import ModalForm from "../Components/ModalForm/ModalForm";
import { useState } from "react";
import { set } from "react-hook-form";

function App() {
  const [isModalOpened, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = (value) => {
    setIsModalOpen(value);
  };

  return (
    <>
      <div className={style.root}>
        {isModalOpened && <ModalForm onClose={closeModal}/>}
        <button type="button" onClick={openModal}>
          Open Modal
        </button>
      </div>
    </>
  );
}

export default App;
