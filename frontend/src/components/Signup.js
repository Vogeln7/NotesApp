import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Flex, Input, Heading, Button, InputGroup, Stack } from "@chakra-ui/react";

function Signup() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        name:'',
        lastname:''
    });
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = { ...formValues }
        const parsedData = JSON.stringify(data);
        try {
            const response = await axios.post('http://localhost:3001/user/signup', JSON.parse(parsedData));
            if (response.status===200){
                navigate(`/`)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Flex as='section'
            p='5'           
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
            direction='column'>
            <form onSubmit={handleSubmit}>
            <Stack
                spacing={5}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
                flexDir='column'
                alignItems='center'
            >
                <Heading color='blue.400'>NotesApp</Heading>
                <InputGroup display='flex' flexDirection='column'>
                    <Input type='text' placeholder="Name" bg='white'
                    onChange={(e)=>{setFormValues({ ...formValues, name: e.target.value })}}></Input>
                </InputGroup>
                <InputGroup display='flex' flexDirection='column'>
                    <Input type='text' placeholder="Lastname" bg='white'
                    onChange={(e)=>{setFormValues({ ...formValues, lastname: e.target.value })}}></Input>
                </InputGroup>
                <InputGroup display='flex' flexDirection='column'>
                    <Input type='text' placeholder="Email" bg='white'
                    onChange={(e)=>{setFormValues({ ...formValues, email: e.target.value })}}></Input>
                </InputGroup>
                <InputGroup>
                    <Input type='password' placeholder="Password" bg='white'
                    onChange={(e)=>{setFormValues({ ...formValues, password: e.target.value })}}></Input>
                </InputGroup>
                <Button type="submit" bg='blue.400' color='whiteAlpha.900'>Signup</Button>
                
            </Stack>
            </form>
        </Flex>
    );
}

export default Signup;