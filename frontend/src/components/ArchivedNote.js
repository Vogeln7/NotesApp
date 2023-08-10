import React from "react";
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter, Text, Button, Center } from '@chakra-ui/react'
import { VscArchive } from "react-icons/vsc";



function ArchivedNote({ noteData }) {

    const activeNote=async(id)=>{
        try {
            await axios.put(`http://localhost:3001/notes/${id}`,{...noteData,active:true})
        } catch (error) {
            console.log(error)
        }
        

    }
    const handleClick=(e)=>{
        activeNote(noteData.id)
    }

    return (
        <Center>
            <Card p='5' height='300px' width='300px'>
                <CardHeader>{noteData.title}</CardHeader>
                <CardBody>
                    <Text>{noteData.content}</Text>
                </CardBody>
                <CardFooter>
                    <Button onClick={handleClick} leftIcon={<VscArchive />} colorScheme='blue' variant='solid'>
                        Active
                    </Button>
                </CardFooter>
            </Card>
        </Center>
    )
}
export default ArchivedNote;