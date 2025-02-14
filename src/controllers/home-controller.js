import { Router } from 'express';

import movieService from '../services/movie-service.js';

const router = Router();

router.get('/', async (req, res) => { 
    
    // mongoose cannot operate with documents => convert documents to plain objects and there are 3 ways to fix that:
    
    // #1-fix
    // const movies = await movieService.getAll();
    // const plainMovies = movies.map(m => m.toObject());
    // res.render('home', { movies: plainMovies }); 
    // #1
    
    // #2-fix
    // from the service the data comes as Query of Documents and we convert with .lean() to return Object:
    // const movies = await movieService.getAll().lean();
    // res.render('home', { movies }); 
    // #2
    
    //* #3-fix - we have chosen this fix
    // in index.js at handlebars config add runtimeOptions as follows: 
    // app.engine('hbs', handlebars.engine({
    //     extname: 'hbs',
    //     runtimeOptions: {
    //         allowProtoPropertiesByDefault: true,
    //     },
    //     helpers: {
    //         showRating: showRatingHelper,
    //     }
    // }));  
    // #3

    const movies = await movieService.getAll();
    
    res.render('home', { movies });
});

router.get('/about', (req, res) => { 
    res.render('about')
});

export default router;