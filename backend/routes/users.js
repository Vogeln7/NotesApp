import express from 'express';
import usersController from '../controllers/users.js';

export const router = express.Router();


router.post('/signup', usersController.createUser);

router.post('/login', usersController.login);

router.get('/:id/notes', usersController.getUserActiveNotes);

router.get('/notes/:id/archived', usersController.getUserArchivedNotes);