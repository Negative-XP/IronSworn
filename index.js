var express = require('express');
const session = require('express-session');
const app = express();
const mainRoutes = require('./routes/main');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', mainRoutes);




  app.listen(3000, () => {
    console.log(
      `Server is running on port ${3000}, you better catch it!`
    );
  });


