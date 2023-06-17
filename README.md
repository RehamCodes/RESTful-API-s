# RESTful API using Node.js, Express, and MongoDB

This is a RESTful API project built with Node.js, Express, and MongoDB.It utilizes nodemon for automatic server restarts during development and Babel for compiling the code for better compatibility. It also provides endpoints to manage a database using CRUD operations.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/): Follow the official Node.js installation guide to install Node.js on your system.

- [MongoDB](https://www.mongodb.com/): Install MongoDB by following the official installation guide provided by MongoDB.

- [Postman](https://www.postman.com/): Download and install Postman to test the API endpoints.

## Getting Started

To run the application locally, follow the steps below:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/RehamCodes/RESTful-API-s.git
   ```

2. Navigate to the project's directory:

   ```
   cd RESTful-API-s
   ```

3. Install the dependencies using npm:

   ```
   npm install
   ```


This will install all the required dependencies specified in the `package.json` file.


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


