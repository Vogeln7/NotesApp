import express from 'express';
import {getAll,createNote,updateById,deleteNote,getNoteById, getNoteByUserId} from '../controllers/notes.js';

export const router = express.Router();


router.get('/', getAll);

router.get('/:id', getNoteById);

router.get('/:id', getNoteByUserId);

router.post('/', createNote);

router.put('/:id', updateById);

router.delete('/:id', deleteNote)



