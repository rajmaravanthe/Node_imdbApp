var imdb = imdb || {};

(function (scope) {

    var _id = 0;
    function getTheatre(title, length, rating, country, isPuppet) {
        _id = _id + 1;
        var theatre = {
            _id: _id,
            title: title,
            length: length,
            rating: rating,
            country: country,
            isPuppet: isPuppet,
            _actors: [],
            _reviews: [],
            addActor: function (actor) {
                this._actors.push(actor);
            },
            addReview: function (review) {
                this._reviews.push(review);
            },
            getActors: function () {
                return this._actors;
            },
            getReviews: function () {
                return this._reviews;
            },
            deleteReview: function (review) {
                this._reviews.splice(this._reviews.indexOf(review), 1)
            },
            deleteReviewById: function (id) {
                this._reviews.splice((id + 1), 1)
            },
        };

        return theatre;

    }
    imdb.getTheatre = getTheatre;
}(imdb));