import { encryptPassword } from "../helpers/encryption.js"
import { createNote } from "../repositories/note.js"
import { createUser, findUserByEmail } from "../repositories/user.js"

export async function seedAll (){
    const checkUser = await findUserByEmail('david@gmail.com');
    if (checkUser && Object.keys(checkUser).length>0) {return};
    const hashedPassword=await encryptPassword ("123456")
    const user1={
        name:"David",
        lastname:"Vogel",
        email:"david@gmail.com",
        password:hashedPassword,
    }   
    const newUser = await createUser(user1);
    
    const note1={
        title:"Primer Nota",
        content:"Contenido desde el seeder",
        users:newUser.id
    }
    
    const newNote=await createNote(note1);
}