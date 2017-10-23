var imdb = imdb || {};

(function (scope) {

    function getGenre(name) {
        
        var genre =  {
            name: name,
            _id: 1,
            movies: [],
            addMovie : function (movie) {
                this.movies.push(movie)
                this._id++;
            },
            deleteMovie: function (movie) {
                this.movies.splice(this.movies.indexOf(movie), 1)
            },
            deleteMovieById: function (id) {
                this.movies.splice((id + 1), 1)
            },
            getMovies: function () {
                return this.movies;
            },
            getTheatre: function () {
                 return this.movies;
            }
        }

        return genre;
    }
    imdb.getGenre = getGenre;
}(imdb));