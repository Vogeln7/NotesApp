import { useState } from "react";
import axios from 'axios';
import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Input, Heading, Button, InputGroup, Stack, Link, Box } from "@chakra-ui/react";

function Login() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const listOfNotes = (userId) => {
        navigate(`/list/${userId}`)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { ...formValues }
        const parsedData = JSON.stringify(data);
        try {
            const response = await axios.post('http://localhost:3001/user/login', JSON.parse(parsedData));
            if (response.status === 200) {
                listOfNotes(response.data.userId)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Flex as='section'
            p='12'
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
                    <Box p='1'>
                        First time?{'  '}
                        <Link color='blue.400' href="/signup">
                            Sign Up
                        </Link>
                    </Box>
                    <InputGroup display='flex' flexDirection='column'>
                        <Input type='text'
                            placeholder="Email"
                            name='email'
                            bg='white'
                            onChange={(e) => {
                                setFormValues({ ...formValues, email: e.target.value })
                            }}></Input>
                    </InputGroup>
                    <InputGroup>
                        <Input type='password'
                            name='password'
                            placeholder="Password"
                            bg='white'
                            onChange={(e) => { setFormValues({ ...formValues, password: e.target.value }) }}></Input>
                    </InputGroup>
                    <Button type='submit' bg='blue.400' color='whiteAlpha.900'>Login</Button>
                </Stack>
            </form>
        </Flex>
    );
}

export default Login;