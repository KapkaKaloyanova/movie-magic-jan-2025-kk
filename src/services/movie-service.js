import movies from '../movies.js';

const movieService = {
    findOne(movieId) {
        //TODO: if movie is missing?

        const result = movies.find(movie => movie.id === movieId);

        return result;
    }
}

export default movieService;