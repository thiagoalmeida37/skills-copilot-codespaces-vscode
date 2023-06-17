// Create web server application with Node.js and Express.js that will listen on port 3000, and will respond with the following HTML content for each request:
// <h1>Comments</h1>
// <ul>
//   <li>Comment 1</li>
//   <li>Comment 2</li>
//   <li>Comment 3</li>
// </ul>
// The content can be hardcoded in the application.
// The application should respond to GET requests only.
// The application should also return the following response header:
// X-Powered-By: Ivan Ivanov
// Test the application with cURL, the browser or any other tool of your choice.
// Submit your code as an archive file with .js extension.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.set('X-Powered-By', 'Ivan Ivanov');
    res.send(`
    <h1>Comments</h1>
    <ul>
      <li>Comment 1</li>
      <li>Comment 2</li>
      <li>Comment 3</li>
    </ul>
    `);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));