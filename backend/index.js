import express from 'express';
import {} from 'dotenv/config';
import datasource from './config/datasource.js';
import {router as notesRoutes}  from './routes/notes.js';
import {router as userRoutes} from './routes/users.js';
import { seedAll } from './seeders/seedAll.js';


//init conection to the database
datasource.initialize().then(seedAll);

const app = express();
//Use
app.use(express.json());

//Routes
app.use('/notes',notesRoutes);
app.use('/user',userRoutes);

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Running on Port:${process.env.SERVER_PORT} and environment ${process.env.NODE_ENV}`);
})
