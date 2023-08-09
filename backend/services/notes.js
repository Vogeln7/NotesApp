import { createNote, getAll, updateNote, deleteNote, getNoteById, noteByUser} from '../repositories/note.js';

//hashear password

export const newNote = async (noteData)=>{
    try {
        const note = await createNote(noteData);
        return note;
    } catch (err) {
        throw new Error (err);
    }   
    
};
export const allNotes = async ()=>{
    try {
        const notes = await getAll();
        return notes;
    } catch (err) {
        throw new Error (err);
    }   
    
};

export const noteById = async (id)=>{
    try {
        const notes = await getNoteById(id);
        return notes;
    } catch (err) {
        throw new Error (err);
    }   
    
};

export const noteByUserId = async (id)=>{
    try {
        const notes = await noteByUser(id);
        return notes;
    } catch (err) {
        throw new Error (err);
    }   
    
};







export const updateNoteById = async (id,newData)=>{
    try {
        const updatedNote = await updateNote(id,newData);
        return updatedNote;
    } catch (err) {
        throw new Error (err);
    }   
    
};

export const deleteNoteById = async (id)=>{
    try {
        const deletedNote = await deleteNote(id);
        return deletedNote;
    } catch (err) {
        throw new Error (err);
    }   
    
};
     