const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  fs.readFile('person.json', 'utf8', (err, data) => {
    if (err) throw err;
    const person = JSON.parse(data);
    res.send(`Welcome ${person.name}`);
  });
});

app.use((req, res, next) => {
  res.status(404).send("Sorry! Can\’t find that resource. Please check your URL");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
