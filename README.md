# Questionnaire

## Description

I created this project to train and prove my skills.
I like the result more in terms of code than the final product.
I think I managed to follow the maximum practices to maintain the quality of the code.
The project used a lot of technologies that were new to me, and with this in mind, I like the result.

## Functionality

The application is a form builder.
It allows you to create a questionnaire, edit it and collect statistics on its completion.
The application has authorization through JWT. 
You can share your quiz by sending a link to it. 
The quiz consists of questions and possible answers. 
As the creator of the survey, you can view statistics showing how many people selected a particular answer. 
The application can be used for statistical surveys.

## Technologies

Client:

* React
* React Router
* Redux
* Redux Thunk
* TypeScript
* Material UI
* Axios 

React was in the list by default, so I position myself as a react developer.
Redux is a popular front-end technology and it was the first time I used it.
As well as TypeScript which is used for code security and autocomplete.
Material UI is UI framework that seemed interesting to me.

Server:

* Node JS
* TypeScript
* Express
* Express Validator
* Cookie Parser
* Mongo DB
* Mongoose
* Bcrypt
* JWT

I use Node JS because it is convenient for me as a JS developer.
Express is a minimalistic framework that I, as a node JS developer, want to get acquainted with.
Mongo DB is a database that has good tools for integrating with Node JS, in particular the Mongoose package.

In this project I used many technologies that were new to me. 
I think it is a good way to learn more.

## Problems

During the development process, most of the time I spent working with types, since I worked with typescript for the first time.
Also, the implementation of the constructor stands out from the whole development.
The difficulty was in the dynamic nature of this module.

## Future Features

* Implement the issuance of statistics on the survey in an excel file
* Add share button to contribute single questionnaire
* Add better UI

## Installation

### npm run server:install

Run this command to set up node_modules for server

### npm run client:install

Run this command to set up node_modules for client

### npm run install

This command will set up node_modules for both client and server

### npm run server:dev

Run this command to start server in development mode

### npm run server:start

Run this command to start server in production mode

### npm run client:dev

Run this command to start client in development mode

### npm run client:build

Run this command to start client in production mode

### npm run dev

This command will run server and client both in development mode

### npm run start

This command will run server and client both in production mode

## Usage

When you enter the application, you are taken to the login page, from which you can go to the registration page.
After registering, you get to the main page, from where you can go to the list of forms or immediately create a new one.
The list of forms displays the name, the number of questions and the number of completions.
Each form can be edited or deleted, See the form from the side and look at the statistics.
When creating a form, you can add questions and answer options unlimitedly.