const express = require('express')
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../pictures")))
// app.use(express.static(path.join(__dirname, "../img")))

//app.use('/', express.static(path.join(__dirname, '../src')))
// app.use(express.static(__dirname + '/src'));
// statically serve everything in the build folder on the route '/build'
app.use('/dist', express.static(path.join(__dirname, '../dist')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/Team', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/Docs', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/