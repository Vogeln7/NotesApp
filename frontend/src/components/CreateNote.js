import React from "react";
import { Textarea, IconButton, Flex, Input, InputGroup, Box, Center } from '@chakra-ui/react'
import { VscSave, VscClose } from "react-icons/vsc";


function CreateNote() {
    return (
        <Center>
        <Flex 
        direction='column'
        gap='5' 
        margin='8'        
        height='250px'
        width='500px'
        alignItems='center'
        justifyContent='center'        
        boxShadow="md"> 
            <InputGroup display='flex' flexDirection='row' p='2'>
                <span>Title:</span>
                <Input placeholder='Note Title'></Input>
            </InputGroup>
            <InputGroup display='flex' flexDirection='row' p='2'>
                <span>Content:</span>
                <Textarea placeholder='Content of the Note'></Textarea>
            </InputGroup>
            <Box display='flex' flexDirection='row'>
            <IconButton aria-label='Search database' icon={<VscSave />} />
            <IconButton aria-label='Search database' icon={<VscClose />} />
            </Box>
        </Flex>
        </Center>
    )
}
export default CreateNote;