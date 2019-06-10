# Hearthstone Card API

## Description

This is a JSON API themed on Hearthstone, a mobile/PC game made by Blizzard. The app is built with full CRUD across three models (Card, Set, and Class) using RESTful routes. The data from the API is originally pulled from Hearthstone API, a rich resource for the game, found at https://hearthstoneapi.com/.

## Technologies Used

Express.js, MongoDB, Mongoose, Handlebars.js, HTML, CSS

# Front End View

<img src="https://raw.githubusercontent.com/ashanevs/hearthstone-api/master/views/public/images/deployed-screenshot.png" alt="hearthstone-card-api" width=500>

# Getting Started / Installation Instructions

To interact with the front end of the app, simply go to https://hearthstone-card-api.herokuapp.com/, or you can access various endpoints in the following section by appending the url with the routes provided.

If you want to work with the full repo, first fork and clone it (https://help.github.com/en/articles/fork-a-repo). Ensure you have node installed (node --version from your CLI to check the version, if not, it is available for free from their website) then run

```
npm install
```

from the root directory of your cloned project to install dependencies (e.g. Express, Mongoose). Follow this with

```
node db/seed.js
```

in order to seed the current data into your local database. (Give this ~30 seconds, the CLI will "hang" briefly and you will need to use cmd + C to stop the seeding process). From there, you can run

```
nodemon index.js
```

to begin hosting from http://localhost:8080/.

# Endpoints

Note that all ":name" endpoints are case sensitive - proper capitalization, punctuation, and spacing are necessary (e.g. "Priest" for class, "Shadow Word: Pain" for card, "Classic" for set etc). Full CRUD is available, although the content is generally meant for GET requests.

## Routes for Cards collection

|   Name    |           Path            | HTTP Verb |                     Purpose                     |
| :-------: | :-----------------------: | :-------: | :---------------------------------------------: |
|   Index   |        /api/cards/        |    GET    |               Displays all cards                |
|  getById  |     /api/cards/id/:id     |    GET    |        Displays one card by its objectId        |
| getByName |   /api/cards/name/:name   |    GET    |          Displays one card by its name          |
| showCard  | /api/cards/showcard/:name |    GET    | Renders front end template for one card by name |
|  Create   |        /api/cards/        |   POST    |     Create a new card using data from body      |
|   Edit    |     /api/cards/:name      |    PUT    |   Edit an existing card using data from body    |
|  Delete   |     /api/cards/:name      |  DELETE   |  Delete an existing card using data from body   |

## Routes for Sets collection

|   Name    |          Path           | HTTP Verb |                    Purpose                     |
| :-------: | :---------------------: | :-------: | :--------------------------------------------: |
|   Index   |       /api/sets/        |    GET    |               Displays all sets                |
|  getById  |    /api/sets/id/:id     |    GET    |        Displays one set by its objectId        |
| getByName |  /api/sets/name/:name   |    GET    |          Displays one set by its name          |
|  showSet  | /api/sets/showset/:name |    GET    | Renders front end template for one set by name |
|  Create   |       /api/sets/        |   POST    |     Create a new set using data from body      |
|   Edit    |     /api/sets/:name     |    PUT    |   Edit an existing set using data from body    |
|  Delete   |     /api/sets/:name     |  DELETE   |  Delete an existing set using data from body   |

## Routes for Classes collection

|   Name    |             Path             | HTTP Verb |                     Purpose                      |
| :-------: | :--------------------------: | :-------: | :----------------------------------------------: |
|   Index   |         /api/classes         |    GET    |               Displays all classes               |
|  getById  |     /api/classes/id/:id      |    GET    |        Displays one class by its objectId        |
| getByName |   /api/classes/name/:name    |    GET    |          Displays one class by its name          |
| showClass | /api/classes/showclass/:name |    GET    | Renders front end template for one class by name |
|  Create   |        /api/classes/         |   POST    |     Create a new class using data from body      |
|   Edit    |      /api/classes/:name      |    PUT    |   Edit an existing class using data from body    |
|  Delete   |      /api/classes/:name      |  DELETE   |  Delete an existing class using data from body   |

# Project History

The MVP goal for this project was to create the back-end of the API. The major challenge of this involved filtering the initial data into a form that was easier to work with, then seeding the data into the database so that all three models had references to other models. These references were made stronger through the use of populate, which filled information to be more interesting at each JSON endpoint.

Once the MVP was completed, my focus moved to create an interesting front end experience using Handlebars. The data I obtained included a number of links to card images, so it was easy to bring those into the views I created which embelished the project a great deal.

## Issues

Unfortunately, the original data was not entirely up to date, and the some recent sets' card-image urls are dead. While not readily apparently (they're pushed to the bottom of the front-end pages), this is something to be addressed in the future.

The original data contains some characters that are encoded in a way that didn't translate properly through Handlebars. It seems likely that there is a helper function available within it that may solve this issue.

There is also an issue wherein the image urls are sent via HTTP and not HTTPS, resulting in a Mixed Content warning in the console. This doesn't impact functionality, and can likely be overcome as simply as by mass-replacing http with https for each card entry in the original data before seeding. Due to time constraints this hasn't yet been addressed.

## Prospective goals

While there is a route to show all cards within a set (complete with front end), it has not yet been implemented. Ideally this would be visible on the home page similarly to the classes, or possibly made available when using an input box to search for a set by name.

Case-sensitivity of the input box is not ideal, and in the future should be improved to be more user-friendly.

Adding deck-building (storing a set of cards) functionality to the app would be amazing.

# Contribution Resources

Source code: https://github.com/ashanevs/hearthstone-api

Issue tracker: https://github.com/ashanevs/hearthstone-api/issues
