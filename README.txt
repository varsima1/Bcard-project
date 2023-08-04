# Backend

This is a backend project written in Node.js that provides functionality for managing users and business cards. Below are the instructions for getting started with the node server app.

## Installation

To set up the project, follow these steps:

1. Enter the server folder using the terminal:

```bash
cd server
```

2. Install the required node modules:

```bash
npm i
```

## Configuration

Before running the application, you need to configure the connection to your Atlas MongoDB. To do this, create a development JSON file in the config folder and include your MongoDB username and password. Here's an example of how the configuration file should look like:

```json
{
  "NODE_ENV": "development",
  "PORT": 8181,
  "DB_NAME": null,
  "DB_PASSWORD": null
}
```

## Available Scripts

You can use the following scripts to run the application:

### `npm start`

- This will run the app using node.
- The page will not reload if you make edits.
- You must have a MongoDB Atlas Cluster (as specified in the configuration).
- The server will be listening on `http://localhost:8181`.
- If there are no login errors, you should see the message painted in purple: `connected to Atlas mongoDB`.

### `npm run dev`

- This script runs the app using nodemon, which allows automatic reloading when you make edits.
- The server will be listening on `http://localhost:9191`.
- If there are no login errors, you should see the message painted in purple: `connected to MongoDb Locally!`.

## CORS Permissions

In order to be able to intercept requests to the server, you are required to provide a legacy address to the origin key in the headers object. You can use one of the following addresses:

- `origin: "http://localhost:3000"`
- `origin: "http://127.0.0.1:5501"`
- `origin: "http://127.0.0.1:3000"`

## Available Routes

Below are the API addresses that the server will respond to, along with the required request body parameters and the permissions required to receive a response.

### Users API

#### API for Registering a New User

```http
POST /api/users
```

##### Request

In the request body, provide an object with the following keys and values:

| Index      | Type    | Index       | Type   | Min | Max | Remark       |
| ---------- | ------- | ----------- | ------ | --- | --- | ------------ |
| name       | object  |             |        |     |     | Required     |
|            |         | first       | string | 2   | 256 | Required     |
|            |         | middle      | string | 2   | 256 |              |
|            |         | last        | string | 2   | 256 | Required     |
| phone      | string  |             |        | 9   | 11  | Required     |
| email      | string  |             |        | 5   |     | Required     |
| password   | string  |             |        | 7   | 20  | Required     |
| image      | object  |             |        |     |     | Required     |
|            |         | url         | string | 14  |     |              |
|            |         | alt         | string | 2   | 256 |              |
| address    | object  |             |        |     |     | Required     |
|            |         | state       | string | 2   | 256 |              |
|            |         | country     | string | 2   | 256 | Required     |
|            |         | city        | string | 2   | 256 | Required     |
|            |         | street      | string | 2   | 256 | Required     |
|            |         | houseNumber | number | 2   | 256 | Required     |
|            |         | zip         | number | 2   | 256 | Required     |
| isBusiness | boolean |             |        |     |     | Default(full) |

- The "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number, and one of the following characters: !@#$%^&\*-
- The "phone" must be a standard Israeli phone number
- The "email" must be a standard email
- The "image/url" must be a standard URL

#### API for User Login

```http
POST /api/users/login
```

##### Request

In the request body, provide an object with the following keys and values:

| Index    | Type   | Min | Max | Remark   |
| -------- | ------ | --- | --- | -------- |
| email    | string | 5   |     | Required |
| password | string | 7   | 20  | Required |

- The "email" must be a standard email
- The "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number, and one of the following characters: !@#$%^&\*-

##### Response

If the user is in the database and the password sent is correct, a token will be returned. You can extract the following object from the token using the jwt-decode library:

| Index      | Type    |
| ---------- | ------- |
| \_id       | string  |
| isBusiness | boolean |
| isAdmin    | boolean |

#### API for Getting Information about All Users

```http
GET /api/users
```

##### Request

- You need to provide a token to get a response from this API.
- You must be an Admin type user to get a response from this API.

#### API for Getting Information about a Specific User

```http
GET /api/users/:id
```

##### Request

- You need to provide a token to get a response from this API.
- You must be the registered user or an Admin type user to get a response from this API.

#### API for Updating User Information

```http
PUT /api/users/:id
```

##### Request

In the request body, provide an object with the following keys and values:

| Index      | Type    | Index       | Type   | Min | Max | Remark       |
| ---------- | ------- | ----------- | ------ | --- | --- | ------------ |
| name       | object  |             |        |     |     | Required     |
|            |         | first       | string | 2   | 256 | Required     |
|            |         | middle      | string | 2   | 256 |              |
|            |         | last        | string | 2   | 256 | Required     |
| phone      | string  |             |        | 9   | 11  | Required     |
| email      | string  |             |        | 5   |     | Required     |
| password   | string  |             |        | 7   | 20  | Required     |
| image      | object  |             |        |     |     | Required     |
|            |         | url         | string | 14  |     |              |
|            |         | alt         | string | 2   | 256 |              |
| address

    | object  |             |        |     |     | Required     |
|            |         | state       | string |     |     |              |
|            |         | country     | string |     |     | Required     |
|            |         | city        | string |     |     | Required     |
|            |         | street      | string |     |     | Required     |
|            |         | houseNumber | number | 1   |     | Required     |
|            |         | zip         | number |     |     |              |
| isBusiness | boolean |             |        |     |     | Default(full) |

- The user's "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number, and one of the following characters: !@#$%^&\*-
- The "phone" must be a standard Israeli phone number
- The "email" must be a standard email
- The "image/url" must be a standard URL
- You need to provide a token to get a response from this API.
- You must be the registered user or an Admin to get a response from this API.

#### API for Deleting a User

```http
DELETE /api/users/:id
```

- You need to provide a token to get a response from this API.
- You must be the registered user or an Admin to get a response from this API.

#### API for Changing User Business Status

```http
PATCH /api/users/:id
```

- You need to provide a token to get a response from this API.
- You must be the registered user or an Admin to get a response from this API.

### Cards API

#### API to Get All Business Cards

```http
GET /api/cards/
```

#### API for Getting a Business Card of a Specific Business

```http
GET /api/cards/:id
```

#### API for Receiving All Business Cards of the Registered User

```http
GET /api/cards/my-cards
```

- You need to provide a token to get a response from this API.

#### API for Creating a New Business Card

```http
POST /api/cards/
```

##### Request

In the request body, provide an object with the following keys and values:

| Index       | Type   | Index       | Type   | Min | Max  | Remark   |
| ----------- | ------ | ----------- | ------ | --- | ---- | -------- |
| title       | string |             |        | 2   | 256  | Required |
| subtitle    | string |             |        | 2   | 256  | Required |
| description | string |             |        | 2   | 1024 | Required |
| phone       | string |             |        | 9   | 11   | Required |
| email       | string |             |        | 5   |      | Required |
| web         | string |             |        | 14  |      |          |
| image       | object |             |        |     |      | Required |
|             |        | url         | string | 14  |      |          |
|             |        | alt         | string | 2   | 256  |          |
| address     | object |             |        |     |      | Required |
|             |        | state       | string |     |      |          |
|             |        | country     | string |     |      | Required |
|             |        | city        | string |     |      | Required |
|             |        | street      | string |     |      | Required |
|             |        | houseNumber | number | 1   |      | Required |
|             |        | zip         | number |     |      |          |

- The "phone" must be a standard Israeli phone number
- The "email" must be a standard email
- The "web" must be a standard URL
- The "image/url" must be a standard URL
- You need to provide a token to get a response from this API.
- You must be a Business type user to get a response from this API.

#### API for Updating Business Card Information

```http
PUT /api/cards/:id
```

##### Request

In the request body, provide an object with the following keys and values:

| Index       | Type   | Index       | Type   | Min | Max  | Remark   |
| ----------- | ------ | ----------- | ------ | --- | ---- | -------- |
| title       | string |             |        | 2   | 256  | Required |
| subtitle    | string |             |        | 2   | 256  | Required |
| description | string |             |        | 2   | 1024 | Required |
| phone       | string |             |        | 9   | 11   | Required |
| email       | string |             |        | 5   |      | Required |
| web         | string |             |        | 14  |      |          |
| image       | object |             |        |     |      | Required |
|             |        | url         | string | 14  |      |          |
|             |        | alt         | string | 2   | 256  |          |
| address     | object |             |        |     |      | Required |
|             |        | state       | string |     |      |          |
|             |        | country     | string |     |      | Required |
|             |        | city        | string |     |      | Required |
|             |        | street      | string |     |      | Required |
|             |        | houseNumber | number | 1   |      | Required |
|             |        | zip         | number |     |      |          |

- The "phone" must be a standard Israeli phone number
- The "email" must be a standard email
- The "web" must be a standard URL
- The "image/url" must be a standard URL
- You need to provide a token to get a response from this API.
- You must be a Business type user to get a response from this API.

#### API for Liking a Business Card

```http
PATCH /api/cards/:id
```

- You need to provide a token to get a response from this API.

#### API for Deleting a Business Card

```http
DELETE /api/cards/:id
```

- You need to provide a token to get a response from this API.
- You must be the user who created the card or an admin to delete the business card.