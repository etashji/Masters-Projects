//Here is where you'll set up your server as shown in lecture code
import express from 'express';
const app = express();
import configRoutes from './routes/index.js';
import exphbs from 'express-handlebars';

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
    if (req.body && req.body._method) {
      req.method = req.body._method;
      delete req.body._method;
    }
  
    next();
};

app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log("Now we've got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});

// import * as characters from './data/characters.js';
// import helpers from './helpers.js';

// try {
//   console.log(await characters.searchCharacterById("5555555"));
// } catch (e) {
//   console.log(e);
// }