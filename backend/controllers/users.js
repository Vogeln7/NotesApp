
import { getArchivedNotes } from '../repositories/note.js';
import { newUser, loginUser, getUserActiveNotes} from '../services/users.js';

export default {
    createUser : async (req,res)=>{
        const {name,lastname,email,password}= req.body;
        const userData = {name,lastname,email,password}
        try {
            const userCreated = await newUser(userData);
            res.send(userCreated);
        } catch (err) {
            res.status(500).send('Algo salió mal');
        }
        
    },
    login : async (req,res)=>{
        const {email,password}= req.body;
        
        try {
            const logedUser = await loginUser(email,password);
            if (logedUser.errorCode){
                res.status(logedUser.errorCode).send({message:logedUser.message});
                return;
            }
            res.status(200).send({message:`Usuario ${logedUser.id} fue logueado correctamente`});
            return;
        }
        catch (err) {
            res.status(500).send('Algo salió mal');
        }
        
    },
    getUserActiveNotes : async (req,res)=>{
        const id = parseInt(req.params.id);
        
        try {
            const activeNotes = await getUserActiveNotes(id);
            res.status(200).send({message:activeNotes});
            return;
        }
        catch (err) {
            console.log(err)
            res.status(500).send('Algo salió mal');
        }
        
    },
    getUserArchivedNotes : async (req,res)=>{
        const id = parseInt(req.params.id);
        
        try {
            const archivedNotes = await getArchivedNotes(id);
            res.status(200).send({message:archivedNotes});
            return;
        }
        catch (err) {
            console.log(err)
            res.status(500).send('Algo salió mal');
        }
        
    },
} 