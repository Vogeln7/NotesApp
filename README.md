# NotesApp
Application that allows you to take notes.

## About the project
This API was developed to create notes and the users that gona use them.

### Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [TypeOrm](https://typeorm.io/)
* [React](https://es.react.dev/)


## Getting Started

Alternatively, to get a local copy up and running follow these simple steps.

### Prerequisites

* MySql
	* Folow this [installation steps](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).
	* Create a database for the app. 

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Vogeln7/NotesApp
   cd NotesApp
   ```
2. There will be two folders, one called `backend` and another called `frontend`.
We are going to enter each of them with a terminal (two different terminals) it can be the terminal of your operating system or in my case of VsCode
   ```sh
   cd backend || cd frontend
   ```   
3. In each of these terminals we are going to install the dependencies of the project.
   ```sh
   npm install
   ```
4. Configure in the root folder your `.env` file following the `.env.example` provided
   ```js
   
	    DB_USER = "Name of your MySql user",
        DB_PASSWORD = "Database password for MySql user",
        DB_NAME = "Name of your created MySql database",
        DB_HOST = "Name of your MySql Host -- example: localhost || 127.0.0.1",
        DB_PORT = "Port of your MysQl connection",
        SERVER_PORT="Port of your Express server -- example: 3001",
        URL="URL of your Server -- example: http://localhost:3001",
        NODE_ENV="Name of your work environment --example: development | test | production"
		
   ``` 
5. Install [Insomnia](https://insomnia.rest/download) to test the routes of the API.

6. Import the collection of routes from `notesAppRoutes.json` in your Insomnia Application
   
7. First we are going to create the database with your configuration by executing the following command in the backend terminal:
   ```sh
   npm run db:create
   ```
8. Secondly we are going to execute our backend with the following command in the same terminal:
   ```sh
   npm start
   ``` 
9. Once our backend is up, we go to the open terminal for the frontend and execute the following command:

   ```
   sh
   npm start
   ``` 
10. Done! the last command should run the Notes App created in React.


## Authors

- [@DavidVogel](https://www.github.com/Vogeln7)