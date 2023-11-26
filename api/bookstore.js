const url = 'https://demoqa.com/BookStore/v1';

async function getBooks() {
    try {
        const response = await axios.get(url + '/Books');
        return response;
    } catch (error) {
        return error.response;
    }
}

async function addBook(userId, isbn) {
    try {
        const response = await axios.post(url + '/Books', {
            userId,
            isbn,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}
