var imdb = imdb || {};

(function (scope) {

    var _id = 0;
    function getMovie(title, length, rating, country) {
        _id = _id + 1;
        var movie = {
            _id: _id,
            title: title,
            length: length,
            rating: rating,
            country: country,
            _actors: [],
            _reviews: [],
            addActor: function (actor) {
                this._actors.push(actor);
            },
            getActors: function () {
                return this._actors;
            },
            addReview: function (review) {
                this._reviews.push(review);
            },
            deleteReview: function (review) {
                this._reviews.splice(this._reviews.indexOf(review), 1)
            },
            deleteReviewById: function (id) {
                this._reviews.splice((id + 1), 1)
            },
            getReviews: function () {
                return this._reviews;
            },
        }

        return movie;

    }
    imdb.getMovie = getMovie;
}(imdb));