This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setting Up
After unzipping/cloing the repository, please follow the given steps:
* run npm install from the terminal, to install all dependencies
* to start the server run ```npm start``` from the the terminal.
* navigate to localhost:3000 to see the app in action


## Major technologies used
* Bootstrap
* React Router
* Axios
* D3.js

## Authentication

A simple server (written in NodeJS) was hosted at https://quick-auth-check.herokuapp.com
Post request must be made to this server to authenticate  using axios.

The following credentials can be used for quick login.

username: chuck@example.com
Password: Norris@1234
These have been preloaded in the form for convenience. Any other credentials will not work whatsoever.

UI is nice and clean, thanks largely to bootstrap.

The user cannot access data tab/route, unless logged in.

## Data Visualisation
The dual line graph shows comparison of stock prices of Apple and Facebook over a year.
As instructed, the data was fetched using a GET request (using Axios) from Quandl API.
D3.js has been used for the plotting the graph as an SVG.
I have used my own Quandl API key for demonstration purpose.