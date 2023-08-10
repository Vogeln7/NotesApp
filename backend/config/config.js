
import {} from 'dotenv/config';
import User from '../entities/User.js';
import Note from '../entities/Note.js';



export default {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "type": "mysql",
    "port":process.env.DB_PORT,
    "synchronize": true,
    "logging": true,
    "entities": [User,Note],
    "subscribers": [],
    "migrations": ['../migrations'],
    "seeds":[`../seeds`],
    "factories": [`../factories`]    
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "type": "mysql",
    "port":process.env.DB_PORT,
    "synchronize": true,
    "logging": true,
    "entities": ["src/entities/*.js"],
    "subscribers": [],
    "migrations": [],
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "type": "mysql",
    "port":process.env.DB_PORT,
    "synchronize": true,
    "logging": true,
    "entities": ["src/entities/*.js"],
    "subscribers": [],
    "migrations": [],
  }
}
