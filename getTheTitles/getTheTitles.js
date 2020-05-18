const getTheTitles = function(books) {
    var titles = books.map(function(value){
        return value.title;
    });
    return titles;
}

module.exports = getTheTitles;
