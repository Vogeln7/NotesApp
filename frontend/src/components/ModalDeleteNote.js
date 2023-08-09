import React from "react";
import axios from 'axios';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,    
    useDisclosure
} from '@chakra-ui/react'
import { VscTrash } from "react-icons/vsc";


function ModalDeleteNote(props) {
    const id=props.id
    
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    
    
    const deleteNote = async (id) => {
        try {

            
             const response = await axios.delete(`http://localhost:3001/notes/${id}`);
             if (response.status===200){
                console.log({message:`Nota con el ID:${id} ha sido eliminada`})
             }
                      
        } catch (error) {
            console.log(error)
        }
        return
    };
    
     const handleClick = (e)=>{            
        deleteNote(id)       
     }

    return (
        <>            
            <Button onClick={onOpen} leftIcon={<VscTrash />} colorScheme='blue' variant='solid'>
                Delete
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>                    
                    <ModalHeader>Delete Note</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        ¿Do you really want to delete this note?
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' mr={3} type="submit" onClick={handleClick}>
                            Yes
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                    
                </ModalContent>
            </Modal>            
        </>
    )
}

export default ModalDeleteNote;