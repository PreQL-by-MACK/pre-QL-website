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

app.use((req, res, next) => {
  console.log('Error ', err)
  res.status(404).send('The page you are looking for doesn\'t exist')
})

app.use((err, req, res, next) => {
  console.log('Error ', err)
  res.status(500).send('The page you are looking for doesn\'t exist')
})

app.listen(3000); //listens on port 3000 -> http://localhost:3000/