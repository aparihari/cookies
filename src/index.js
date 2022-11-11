const express = require('express');
const path = require('path');
const uuid = require('uuid');
const https = require('https');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('set-cookie', [`session=${uuid.v4('session')}`]);
  res.sendFile(`${path.join(__dirname, '..', 'public', 'index.html')}`);
});

app.get('/img', (req, res) => {
  res.setHeader('set-cookie', [
    `remote.local.session=${uuid.v4(
      'remote.local.session'
    )}; samesite=none; secure`,
  ]);
  res.sendFile(
    `${path.join(__dirname, '..', 'public', 'images', 'profile.jpeg')}`
  );
});

https
  .createServer(
    {
      key: fs.readFileSync(
        `${path.join(__dirname, '..', 'certs', 'server.key')}`
      ),
      cert: fs.readFileSync(
        `${path.join(__dirname, '..', 'certs', 'server.cert')}`
      ),
    },
    app
  )
  .listen(3000, function () {
    console.log('App listening on port 3000! Go to https://localhost:3000/');
  });
