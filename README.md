# Hearthstone Card API

This is a JSON API themed on Hearthstone, a mobile/PC game made by Blizzard. It was built primarily using Express.js, MongoDB/Mongoose, and Handlebars. The app is built with full CRUD across three models (Card, Set, and Class) using RESTful routes.

# Front End View

<img src="https://raw.githubusercontent.com/ashanevs/hearthstone-api/master/views/public/images/deployed-screenshot.png" alt="hearthstone-card-api" width=500>

# Getting Started

To interact with the front end of the app, simply go to https://hearthstone-card-api.herokuapp.com/, or you can access various endpoints in the following section pass in behind the url provided.

# Endpoints

Note that all ":name" endpoints are case sensitive - proper capitalization, punctuation, and spacing are necessary (e.g. "Priest" for class, "Shadow Word: Pain" for card, "Classic" for set etc).

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
