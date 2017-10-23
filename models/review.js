var imdb = imdb || {};

(function (scope) {
    var _id = 0;
    function getReview (author, content, date) {
        _id = _id + 1;
        var review = {
            _id: _id,
            author: author,
            content: content,
            date: date,   
        };

        return review;
    }
    imdb.getReview = getReview;
}(imdb));