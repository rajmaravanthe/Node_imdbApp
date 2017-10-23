var imdb = imdb || {};

(function (scope) {
    var _id = 0;
    function getActor (name, bio, born) {
        _id = _id + 1;
        var actor = {
            _id: _id,
            name: name,
            bio: bio,
            born: born
        };

        return actor;
    }
    imdb.getActor = getActor;
}(imdb));