import { Router } from 'express';
import movieService from '../services/movie-service.js';

const movieController = Router();

movieController.get('/search', async (req, res) => {
    // console.log(req.query); 
    // console.log(req.body); 
    // console.log(req.params); 
    const filter = req.query;
    const movies = await movieService.getAll(filter);

    res.render('search', { movies, filter });

});

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', async (req, res) => {
    const newMovie = req.body;

    await movieService.create(newMovie);

    res.redirect('/');
});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    //get movie data for movieId
    const movie = await movieService.getOne(movieId);
    movie.rating
    res.render('movie/details', { movie })
});

movieController.get('/:movieId/attach-cast', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    res.render('movie/attach-cast', { movie });
});

export default movieController;