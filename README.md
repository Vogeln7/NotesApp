# NotesApp
Application that allows you to take notes.

## About the project
This API was developed to create notes and the users that gona use them.

### Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [TypeOrm](https://typeorm.io/)


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
2. Install dependencies
   ```sh
   npm install
   ```
3. Configure in the root folder your `.env` file following the `.env.example` provided
   ```js
   
	    DB_USER = "Name of your MySql user",
        DB_PASSWORD = "Database password for MySql user",
        DB_NAME = "Name of your created MySql database",
        DB_HOST = "Name of your MySql Host -- example: localhost || 127.0.0.1",
        DB_PORT = "Port of your MysQl connection",
        SERVER_PORT="Port of your Express server -- example: 3000",
        URL="URL of your Server -- example: http://localhost:3000",
        NODE_ENV="Name of your work environment --example: development | test | production"
		
   ``` 
4. Install [Insomnia](https://insomnia.rest/download) to test the routes of the API. 
5. Import the collection of routes from `notesAppRoutes.json` in your Insomnia Application
   
5. Done! Run the app
   ```sh
   npm start
   ```
## Authors

- [@DavidVogel](https://www.github.com/Vogeln7)