const getTheTitles = function(books) {
    const titles = books.reduce((titles, book) => {
        titles.push(book.title);
        return titles;
    } , []);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
