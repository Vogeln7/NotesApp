import datasource from "../config/datasource.js";
import User from "../entities/User.js";

const userRepository = datasource.getRepository(User);

export async function createUser(user){
    try{
        const newUser = await userRepository.save(user);
        return newUser;
    }catch(err){
        return {errorCode:409,
                message:`email ya existente`}
    }    
}
export async function findUserByEmail(email){
    try{        
        const user = await userRepository.findOne({
            where:{
                email:email
            }
        });        
        return user;
    }catch(err){
        return {errorCode:404,
                message:`Usuario no encontrado`}
    }    
}



