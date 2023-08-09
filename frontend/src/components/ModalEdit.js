import React, { useState } from "react";
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
    FormControl,
    FormLabel,
    Input,
    Textarea,
    useDisclosure
} from '@chakra-ui/react'
import { VscEdit} from "react-icons/vsc";


function ModalEdit(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const noteId = props.note.id;



    const [formValues, setFormValues] = useState({
        title: "",
        content: ""
    })

    const saveEditNote = async (id) => {
        try {
            const { data } = await axios.put(`http://localhost:3001/notes/${id}`, formValues);
            console.log(data)


        } catch (error) {
            console.log(error)
        }
        return
    };

    const handleClick = (e) => {
        saveEditNote(noteId)
    }

    return (
        <>

            <Button onClick={onOpen} leftIcon={<VscEdit />} colorScheme='green' variant='solid'>
                Edit
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>

                    <ModalHeader>Edit your Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input ref={initialRef} placeholder='Note Title' name='title'
                                onChange={(e) => { setFormValues({ ...formValues, title: e.target.value }) }} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Content</FormLabel>
                            <Textarea placeholder="Write the note content" name="content"
                                onChange={(e) => { setFormValues({ ...formValues, content: e.target.value }) }}></Textarea>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} type="submit" onClick={handleClick}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>

        </>
    )
}

export default ModalEdit;