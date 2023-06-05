# AuthWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Further info about the project 

Developed by : Lekha Shree

## Description: 

This web application allows users to view weather information and includes a login and signup page. It utilizes a weather API key obtained from `https://api.openweathermap.org`. User registrations are stored in local storage, and login validation is performed using a mock backend API created with json-server.The credentials for user authentication can be found in the db.json file located in the root of the application.

## Application Setup

To set up the mock backend API, we first install json-server globally `npm install -g json-server`

Then we create a new file called `db.json` in the root directory of this Angular project. This file will serve as the mock backend data source.

Then we start the json-server and point it to your db.json file `json-server --watch db.json`

This will start a mock backend API at `http://localhost:3000` . 

To run the application, we first install the necessary packages by running `npm install`. 

Next, we can start the Angular server using `ng serve`. 
(If any error occurs in running the application "delete node modules" and then install it by `npm install` followed by `ng serve` to solve the issue and run the application)

The application now can be accessed at `http://localhost:4200`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

