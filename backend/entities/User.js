import { EntitySchema } from "typeorm";

export default new EntitySchema({
    name: "User", // Will use table name `post` as default behaviour.
    tableName: "users", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        lastname: {
            type: "varchar",
        },
        email: {
            type: "varchar",
            unique: true
        },
        password: {
            type: "varchar"            
        },
    },
    relations: {
        notes: {
            target: "Note",
            type: "one-to-many",            
            cascade: true,
        },
    },
})