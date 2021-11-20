## User-Management-App

This was created as part of Node code challenge


This project requires mysql database installed in the system

## Create .env file
Create a .env file or rename the .env.example file to .env and update the values

```
PORT: 4000
MYSQL_DB_HOST=localhost
MYSQL_DB_PORT= <port>
MYSQL_DB_USER= <username>
MYSQL_DB_PASSWORD= <password>
MYSQL_DB_NAME= <Database name>

```

## Installation
To run this project, install it locally using npm:

```
$ npm install
$ npm start

Go to http://localhost:4000/ 
```
## Form Validations
Here are the things to consider while adding a new User

```
All fields are required.
Emails Should be uique for different users
Phone number should be 10 digits
First Name should contain minimum length of 3

```
