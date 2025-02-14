import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';


import routes from './routes.js';
import showRatingHelper from './helpers/rating-helper.js';

const app = express();

// db configuration
const uri = 'mongodb://localhost:27017/movie-magic-jan-2025-kk';

try {
    await mongoose.connect(uri);
    console.log(`Connected to DB successfully!`);
} catch (error) {
    console.error(`Cannot connect to DB!`);
    console.log(error.message);
}

// handlebars configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        showRating: showRatingHelper,
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// express configuration
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({extended: false})); // Learn express how to parse form data

// setup routes
app.use(routes);

// start server
app.listen(5000, () => console.log(`Server is listening on http://localhost:5000...`));