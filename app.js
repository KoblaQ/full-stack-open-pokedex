const express = require('express');
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('/version', (req, res) => {
  res.send('4'); // change this string to ensure a new version deployed
});

// endpoint for doing an application health check
app.get('/health', (req, res) => {
  // // eslint-disable-next-line no-constant-condition
  // if (true) throw 'error...  ';
  res.send('ok');
});

// endpoint for github actions to check if the application is up and running
app.get('/github-actions-health', (req, res) => {
  res.status(500).send('error');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
