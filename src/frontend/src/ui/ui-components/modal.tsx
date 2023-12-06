import { useState, ChangeEvent } from 'react';
import { default as ReactModal } from 'react-modal';

export type CustomModalProps = {
    isOpen: boolean
    onRequestClose: () => void
    onSubmit: (name: string) => void
}

const Modal = ({ isOpen, onRequestClose, onSubmit }: CustomModalProps) => {
    const [name, setName] = useState('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        onSubmit(name);
        setName('');
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Example Modal">
            <h2>Entrez le nom du canal</h2>
            <input type="text" value={name} onChange={handleNameChange} />
            <button onClick={handleSubmit}>Valider</button>
        </ReactModal>
    )
}

export default Modal;