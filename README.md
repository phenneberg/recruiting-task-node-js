# Node.js Recruiting Task

## Description
This repository contains a simple Node.js server, that simulates CRUD operations on a collection of users.

<br>

## Usage
After cloning the repository, make a copy of the example environment file [example.env](./example.env) and rename it to [.env](./.env).

Per default the server will run under [http://localhost:8080](http://localhost:8080), but feel free to change the environment variables.

<br>

Next, to install the package dependencies, run:

```console
npm install
```

<br>

The file [package.json](./package.json) contains a start script that runs the server under the host configuration set in the environment file.<br>
To start the server, run:

```console
npm run start
```

<br>

## Task
The places where code has to be written by you are marked with `TODO` comments.

You have to implement the business logic in the [middleware](./src/middleware/user.middleware.ts), which already contains the necessary function stubs and exports.

Secondly, you need to implement the [middleware](./src/controller/user.controller.ts), that defines the routes and calls the middleware functionality. It would be great if you also include some basic parameter validation using the express-validator library, which is already imported into the controller module.

Lastly, integrate the user controller in the [index](./src/index.ts) file, so the server uses the routes you implemented.

The routes to be implemented are as follows:

<br>

## Get a list of all users:

**URL** : `/user`

**Method** : `GET`

<br>

### Success Response

**Code** : `200 OK`

**Content Example**

```json
{
    "users": [
        {
            "email": "test@example.com",
            "firstName": "Test",
            "lastName": "Example"
        },
        {
            "email": "john.doe@example.com",
            "firstName": "John",
            "lastName": "Doe"
        }
    ]
}
```

<br>

## Get a specific user by email:

**URL** : `/user/${email}`

**Method** : `GET`

<br>

### Success Response

**Code** : `200 OK`

**Content Example**

```json
{
    "user": {
        "email": "test@example.com",
        "firstName": "Test",
        "lastName": "Example"
    }
}
```

<br>

### Error Response (User Not Found)

**Code** : `400 NOT FOUND`

**Content Example**

```json
{
    "error": "User does not exist"
}
```

<br>

## Insert a user to the collection:

**URL** : `/user`

**Method** : `POST`

**Data Example (Request Body - JSON)**

```json
{
    "email": "test@example.com",
    "firstName": "Test",
    "lastName": "Example"
}
```

<br>

### Success Response

**Code** : `200 OK`

**Content Example**

```json
{
    "user": {
        "email": "test@example.com",
        "firstName": "Test",
        "lastName": "Example"
    }
}
```

<br>

## Delete a user by email:

**URL** : `/user/${email}`

**Method** : `DELETE`

<br>

### Success Response

**Code** : `200 OK`

<br>

### Error Response (User Not Found)

**Code** : `400 NOT FOUND`

**Content Example**

```json
{
    "error": "User does not exist"
}
```

<br>

#
# Good luck with the task!