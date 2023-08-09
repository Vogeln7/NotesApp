import { checkPassword, encryptPassword } from '../helpers/encryption.js';
import { createUser, findUserByEmail} from '../repositories/user.js';
import { getArchivedNotes , noteByUser} from '../repositories/note.js';

//hashear password

export const newUser = async (userData)=>{
    
        userData.password=await encryptPassword(userData.password);
        const user = await createUser(userData);
        return user;
   
    
};
export const loginUser = async (email,password)=>{
    
        const user = await findUserByEmail(email);
        const checkedPsw=await checkPassword(password,user.password);
        if (!checkedPsw){
            return {errorCode:401,
                    message:`Usuario no autorizado`}
        }
        //token
        return user;
     
    
};
export const getUserActiveNotes = async (userId)=>{
    
        const notes= await noteByUser(userId);
        return notes;     
    
}

export const getUserArchivedNotes = async (userId)=>{
    
    const archivedNotes= await getArchivedNotes(userId);
    return archivedNotes;     

}


 