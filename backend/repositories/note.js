import datasource from "../config/datasource.js";
import Note from "../entities/Note.js";

const noteRepository = datasource.getRepository(Note);

export async function getAll(){
    try{
        const allNotes = await noteRepository.find({
            relations: ["users"]
        });
        return allNotes;
    }catch(err){
        return {message:`Hubo un error mostrando las notas`}
    }    
}

export async function noteByUser(userId){
    try{
        const notes = await noteRepository.find(
            {
                where: {
                    users:{id:userId},
                    active:true                  
                },
            }
        );
        return notes;
    }catch(err){
        return {message:`Hubo un error mostrando las notas del usuario ${userId}`}
    }    
}

export async function getNoteById(noteId){
    try{
        const activeNotes = await noteRepository.find(
            {
                where: {
                    active:true,
                    id:noteId                  
                },
            }
        );
        return activeNotes;
    }catch(err){
        return {message:`Hubo un error mostrando las notas activas`}
    }    
}

export async function getArchivedNotes(userId){
    try{
        const archivedNotes = await noteRepository.find(
            {
                where: {
                    active:false,
                    users:{id:userId}                   
                },
            }
        );
        return archivedNotes;
    }catch(err){
        return {message:`Hubo un error mostrando las notas archivadas`}
    }    
}


export async function createNote(note){
    try{
        const newNote = await noteRepository.save(note);
        return newNote;
    }catch(err){
        return {message:`Hubo un error creando la nota`}
    }    
}


export async function updateNote(id,newData){
    try{
        const updatednote = await noteRepository.update({id:id},newData);
        return updatednote;
    }catch(err){
        console.log(err)
        return {message:`Hubo un error editando la nota`}
    }    
}

export async function deleteNote(id){
    try{
        const deletedNote = await noteRepository.delete({id});
        console.log(deletedNote)
        return deletedNote;
    }catch(err){
        return {message:`Hubo un error eliminando la nota`}
    }    
}