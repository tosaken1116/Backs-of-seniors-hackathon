import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0.3)",
    },

    content: {
        top: "50%",
        left: "50%",
        right: "50%",
        bottom: "50%",
        marginRight: "-50%",
        width: "500px",
        height: "300px",
        transform: "translate(-50%,-50%)",
    },
};

Modal.setAppElement("#__next");

const App = () => {
    const [modalIsopen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const afterOpenModal = () => {};
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>open modal</button>
            <Modal
                isOpen={modalIsopen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
            />
        </div>
    );
};
