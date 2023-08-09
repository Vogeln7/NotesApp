import React from "react";
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter, Text, Button, Center } from '@chakra-ui/react'
import { VscArchive } from "react-icons/vsc";
import ModalEdit from "./ModalEdit";
import ModalDeleteNote from "./ModalDeleteNote";


function Note({ noteData }) {

    const archiveNote=async(id)=>{
        try {
            await axios.put(`http://localhost:3001/notes/${id}`,{...noteData,active:false})
        } catch (error) {
            console.log(error)
        }
        

    }
    const handleClick=(e)=>{
        archiveNote(noteData.id)
    }

    return (
        <Center>
            <Card p='5' height='300px' width='300px'>
                <CardHeader>{noteData.title}</CardHeader>
                <CardBody>
                    <Text>{noteData.content}</Text>
                </CardBody>
                <CardFooter>
                    <Button onClick={handleClick} leftIcon={<VscArchive />} colorScheme='gray' variant='solid'>
                        Archive
                    </Button>
                    <ModalEdit note={noteData} />
                    <ModalDeleteNote id={noteData.id} />
                </CardFooter>
            </Card>
        </Center>
    )
}
export default Note;