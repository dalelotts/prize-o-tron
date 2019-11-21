//Install express server
const express = require('express');
const path = require('path');

const app = express();

const forceSSL = () => {
  return function (request, response, next) {
    if (process.env.HEROKU && request.headers['x-forwarded-proto'] !== 'https') {
      return response.redirect(
        ['https://', request.get('Host'), request.url].join('')
      );
    }
    next();
  }
};

app.use(forceSSL());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

app.get('/*', (request,response) => {

  response.sendFile(path.join(__dirname+'/dist/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);
