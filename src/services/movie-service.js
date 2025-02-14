import { v4 as uuid } from 'uuid';

import Movie from '../models/Movie.js';

export default {
    getAll(filter = {}) {
        let result = Movie.find({});

 /*        if (filter.search){
            result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
        };

        if (filter.genre){
            result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
        };

        if (filter.year){
            result = result.filter(movie => movie.year === filter.year);
        };
 */
        return result;
    },

    getOne(movieId) {
        //TODO: if movie is missing?

        const result = Movie.findById(movieId);

        return result;
    },

    create(movieData) {

        const result = Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            year: Number(movieData.year),
        });

        return result;
    }
}

