import { useState } from "react";
import ModalForm from "./ModalForm";
import FeedbackWindow from "./FeedBackWindow";

export default function ModalFormPage() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(false);
        setIsFeedbackOpen(true);
    };

    return (
        <>
        {isModalOpen && <ModalForm openFeedBack={handleOpenModal}/>}
        {isFeedbackOpen && <FeedbackWindow />}
        </>
    )
}