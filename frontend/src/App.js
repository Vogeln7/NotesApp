import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import ListOfNotes from './components/ListOfNotes'

import {

  ChakraProvider,
  theme,
} from '@chakra-ui/react';




function App() {

  
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>        
        <Route path='/list/:id' element={<ListOfNotes/>}/>
        {/* <Route path='/list/:id/archived' element={<ListOfArchivedNotes/>}/>          */}
      </Routes>     
      </BrowserRouter>      
    </ChakraProvider>
  );
}

export default App;
