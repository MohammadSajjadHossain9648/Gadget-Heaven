import React from 'react';
import Modal from 'react-modal';
import group from '../../assets/Group.png';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root'); // Make sure to bind modal to app element

const ModalComponent = ({ isOpen, onClose, totalPrice }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose} // Close modal when clicked outside or on close button
            style={customStyles}
            contentLabel="Modal"
        >
            <div className="p-7 border border-white_color rounded-lg flex flex-col justify-center items-center">
                <img src={group} alt="success icon image" />
                <h2 className='text-xl font-bold text-dark_blue_color my-5'>Thanks for purchasing.</h2>
                <p className='text-xs font-medium text-shade_dark_blue_color_2 mb-3'>Total: {totalPrice}</p>
                <button onClick={onClose} className='w-full py-2 bg-shade_black_bg_color rounded-full'>Close</button>
            </div>
        </Modal>
    );
};

export default ModalComponent;
