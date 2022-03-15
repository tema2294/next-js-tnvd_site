import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalBuyItem = (props: {handleClose:()=>void,isOpen: boolean})=> {
    const {handleClose,isOpen} = props

    return (
    <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <h1>для того чтобы заказать товар воспользуйтесь номером 8999-790-1085</h1>
        </Box>
    </Modal>
    )
}