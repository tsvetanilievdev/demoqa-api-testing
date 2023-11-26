import axios from 'axios';

const url = 'https://demoqa.com/BookStore/v1';

export async function getBooks() {
    try {
        const response = await axios.get(url + '/Books');
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function addBook(userId, isbn, userName, password) {
    try {
        const response = await axios.post(
            'https://demoqa.com/BookStore/v1/Books',
            {
                userId,
                collectionOfIsbns: [
                    {
                        isbn,
                    },
                ],
            },
            {
                auth: {
                    username: userName,
                    password: password,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function replaceBook(
    userId,
    oldBookISBN,
    newBookISBN,
    userName,
    password
) {
    try {
        const response = await axios.put(
            'https://demoqa.com/BookStore/v1/Books/' + oldBookISBN,
            {
                userId,
                isbn: newBookISBN,
            },
            {
                auth: {
                    username: userName,
                    password: password,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function deleteBook(userId, isbn, userName, password) {
    try {
        const response = await axios.delete(
            'https://demoqa.com/BookStore/v1/Book',
            {
                auth: {
                    username: userName,
                    password: password,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    userId,
                    isbn,
                },
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(url + '/Book?ISBN=' + isbn);
        return response;
    } catch (error) {
        return error.response;
    }
}
