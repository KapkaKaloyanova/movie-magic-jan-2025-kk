import Cast from "../models/Cast.js";


export default {
    getAll(filter = {}) {
        let query = Cast.find({});

        if (filter.exclude) {
            // query = query.find({_id: {$nin: filter.exclude}}); MongoDB 
            query = query.nin('_id', filter.exclude); // mongoose

        }

        return query;
    },

    create(castData) {
        return Cast.create(castData);
    }
}