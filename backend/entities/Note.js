import { EntitySchema } from "typeorm";

export default new EntitySchema({
    name: "Note", // Will use table name `post` as default behaviour.
    tableName: "notes", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        title: {
            type: "varchar",
        },
        content: {
            type: "text",
        },
        active:{
            type: "boolean",
            default:true
        }       
    },
    relations: {
        users: {
            target: "User",
            type: "many-to-one",            
            cascade: true,
        },
    },
})