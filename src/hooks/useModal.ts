import { useState } from 'react';

const useModal = () => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactElement | boolean>(false);

    const handleModal = (content: React.ReactElement | boolean = false) => {
        setModal(!modal);
        if (content) {
            setModalContent(content);
        }
    };

    const handleClose = () => {
        setModal(!modal);
        setModalContent(false);
    };

    const handleChangeContent = (content: React.ReactElement | boolean = false) => {
        if (content) {
            setModalContent(content);
        }
    };

    return { modal, handleModal, modalContent, handleClose, handleChangeContent };
};

export default useModal;