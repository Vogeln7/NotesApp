import express from 'express';
import {getAll,createNote,updateById,deleteNote} from '../controllers/notes.js';
export const router = express.Router();


router.get('/', getAll);

router.post('/', createNote);

router.put('/:id', updateById);

router.delete('/:id', deleteNote)



