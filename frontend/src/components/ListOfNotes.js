import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Center, SimpleGrid, Box,Flex,Text,ButtonGroup,Button} from '@chakra-ui/react'
import Note from "./Note";
import ModalNewNote from "./ModalNewNote";




function ListOfNotes() {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const {id} = useParams();
    
    const getUserNotes = async (id) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/user/${id}/notes`);            
            setNotes(data.message);
        } catch (error) {
            console.log(error)
        }
        return
    }
    
    const newNote = ()=>{
        console.log('Creando una nueva nota')
    }
    const archivedNotes = ()=>{
        navigate(`/list/${id}/archived`)
    }

    useEffect(() => { 
        
        getUserNotes(id) }, [getUserNotes]);

    const renderNotes = () => {
        return (notes.map((note) => {
            return <Box key={"note_" + note.id}><Note noteData={note}/></Box>
        }))
    }

    return (
        <Center>
            <Flex flexDir='column' alignItems='center'>
            <Text as='b'>Notes of User{id}</Text>
            <ButtonGroup>
                <ModalNewNote onClick={newNote} id={id}/>
                <Button onClick={archivedNotes} colorScheme='gray'>ArchivedNotes</Button>                
            </ButtonGroup>
            <SimpleGrid columns='3' p='10' spacing='40px'>
                {renderNotes()}
            </SimpleGrid>
            </Flex>
        </Center>
    )
}
export default ListOfNotes;