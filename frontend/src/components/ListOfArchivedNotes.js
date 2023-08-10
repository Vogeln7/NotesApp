import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Center, SimpleGrid, Box,Flex,Text,ButtonGroup,Button} from '@chakra-ui/react'
import ArchivedNote from "./ArchivedNote";





function ListOfArchivedNotes() {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const {id} = useParams();
    
    const getUserArchivedNotes = async (id) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/user/notes/${id}/archived`);            
            setNotes(data.message);
        } catch (error) {
            console.log(error)
        }
        return
    }
    
    
    const backToList = ()=>{
        navigate(`/list/${id}`)
    }

    useEffect(() => { 
        
        getUserArchivedNotes(id) }, [getUserArchivedNotes]);

    const renderNotes = () => {
        return (notes.map((note) => {
            return <Box key={"note_" + note.id}><ArchivedNote noteData={note}/></Box>
        }))
    }

    return (
        <Center>
            <Flex flexDir='column' alignItems='center'>
            <Text as='b'>Notes of User{id}</Text>
            <ButtonGroup>
                <Button onClick={backToList} colorScheme='gray'>Back</Button> 
            </ButtonGroup>
            <SimpleGrid columns='3' p='10' spacing='40px'>
                {renderNotes()}
            </SimpleGrid>
            </Flex>
        </Center>
    )
}
export default ListOfArchivedNotes;