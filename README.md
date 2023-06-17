# RESTful API using Node.js, Express, and MongoDB

This is a RESTful API project built with Node.js, Express, and MongoDB. It provides endpoints to manage a database using CRUD operations.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/): Follow the official Node.js installation guide to install Node.js on your system.

- [MongoDB](https://www.mongodb.com/): Install MongoDB by following the official installation guide provided by MongoDB.

- [Postman](https://www.postman.com/): Download and install Postman to test the API endpoints.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
git clone <repository-url>

2. Navigate to the project folder:

cd <project-folder>


3. Install the dependencies:

npm install


This will install all the required dependencies specified in the `package.json` file.

4. Configure the MongoDB connection:

- Open the `config.js` file in the project's root directory.
- Modify the `dbURL` value with your MongoDB connection URL.

5. Start the server:

npm start


The server will start running on http://localhost:3000.

## API Endpoints

- `GET /contact`: Get all contacts.
- `GET /contact/:contactId`: Get a contact by ID.
- `POST /contact`: Create a new contact.
- `PUT /contact/:contactId`: Update a contact by ID.
- `DELETE /contact/:contactId`: Delete a contact by ID.

## Testing the API

You can use Postman to test the API endpoints. Here's an example of how to test the `GET /contact` endpoint:

1. Open Postman.
2. Set the request method to GET.
3. Set the request URL to `http://localhost:3000/contact`.
4. Click the Send button.
5. You will receive a response with the list of contacts.

You can test other endpoints in a similar manner by changing the request method and URL accordingly.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.


