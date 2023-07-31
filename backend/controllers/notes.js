import { newNote, allNotes, updateNoteById, deleteNoteById} from "../services/notes.js";


export const getAll = async (req,res)=>{
    try {
        const notes = await allNotes();
        res.send(notes);
    } catch (err) {
        res.status(500).send('Algo salió mal')
    } 

}


export const createNote = async (req,res)=>{
    const {title,content,users}=req.body;
    const noteData={title,content,users};
    try {
        const noteCreated = await newNote(noteData);
        res.send(noteCreated);
    } catch (err) {
        res.status(500).send('Algo salió mal')
    }    
}

export const updateById = async (req,res)=>{
    const id=parseInt(req.params.id);
    const newData=req.body;
    try {
        const updatedNote = await updateNoteById(id,newData);
        res.status(200).send(updatedNote);
    } catch (err) {
        res.status(500).send('Algo salió mal')
}  
    
}

export const deleteNote= async (req,res)=>{
    const id=parseInt(req.params.id);
    try {
        const deletedNote= await deleteNoteById(id);
        res.status(200).send(deletedNote);
    } catch (err) {
        res.status(500).send('Algo salió mal')
    }
    
}
