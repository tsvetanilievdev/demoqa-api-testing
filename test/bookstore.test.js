import { assert } from 'chai';
import { describe, it } from 'mocha';
import { createUser, getUser } from '../api/user.js';
import {
    getBooks,
    addBook,
    replaceBook,
    getBookByISBN,
    deleteBook,
} from '../api/bookstore.js';

describe('Bookstore', () => {
    let userName;
    let password;
    let data;
    let status;
    let books;
    let book;
    describe("Get book, then add it successfully to user's favorites", () => {
        before(async () => {
            userName = 'tsvetan-iliev' + Math.floor(Math.random() * 100001);
            password = 'Cesc123!';
            const response = await createUser(userName, password);
            data = response.data;
            status = response.status;
        });

        it('Get books successfully', async () => {
            const response = await getBooks();

            assert.equal(response.status, 200, 'Status is not 200');
            assert.isArray(response.data.books, 'Data is not array');
            assert.isNotEmpty(response.data.books, 'Data is empty');

            books = response.data.books;
            book = books[0];
        });

        it("Add book with valid isbn to user's favorites books list", async () => {
            const addedBookResponse = await addBook(
                data.userID,
                book.isbn,
                userName,
                password
            );
            assert.equal(addedBookResponse.status, 201, 'Status is not 201');
            assert.equal(
                addedBookResponse.data.books[0].isbn,
                book.isbn,
                'Isbn is not correct'
            );
        });

        it('Book is added to user favorites books list', async () => {
            const response = await getUser(userName, password, data.userID);
            assert.equal(response.status, 200, 'Status is not 200');
            assert.isArray(response.data.books, 'Data is not array');
            assert.isNotEmpty(response.data.books, 'Data is empty');
            assert.equal(response.data.books.length, 1, 'Books count is not 1');
            assert.equal(
                response.data.books[0].isbn,
                book.isbn,
                'Isbn is not correct'
            );
        });
    });

    describe('Add book with fake ISBN unsuccessfully', () => {
        it('with fake isbn to user favorites books list', async () => {
            const response = await addBook(
                data.userID,
                '8888888888888',
                userName,
                password
            );
            assert.equal(response.status, 400, 'Status is not 400');
            assert.equal(
                response.data.message,
                'ISBN supplied is not available in Books Collection!',
                'Message is not correct'
            );
        });
    });

    describe('Replace book from user favorites books list', () => {
        it('with valid ISBN', async () => {
            let oldBookISBN = book.isbn;
            book = books[1];
            const response = await replaceBook(
                data.userID,
                oldBookISBN,
                book.isbn,
                userName,
                password
            );
            data = response.data;
            status = response.status;
        });

        it('Book is replaced successfully', async () => {
            const response = await getUser(userName, password, data.userId);
            assert.equal(response.status, 200, 'Status is not 200');
            assert.isArray(response.data.books, 'Data is not array');
            assert.isNotEmpty(response.data.books, 'Data is empty');
            assert.equal(response.data.books.length, 1, 'Books count is not 1');
            assert.equal(
                response.data.books[0].isbn,
                book.isbn,
                'Isbn is not correct'
            );
        });
    });

    describe('Book with ISBN 9781491904244 has 278 pages', () => {
        let bookToCheck;
        it('Get book with ISBN 9781491904244', async () => {
            const response = await getBookByISBN('9781491904244');
            bookToCheck = response.data;
            assert.exists(bookToCheck, 'Book is not found');
        });

        it('Book has 278 pages', () => {
            assert.equal(bookToCheck.pages, 278, 'Book has not 278 pages');
        });
    });

    describe('Remove already added book from user favorites books list', () => {
        it('Remove the book', async () => {
            const response = await deleteBook(
                data.userId,
                book.isbn,
                userName,
                password
            );
            console.log('stop');

            assert.equal(response.status, 204, 'Status is not 204');
        });

        it('User favorites books list is empty', async () => {
            const response = await getUser(userName, password, data.userId);
            assert.equal(response.status, 200, 'Status is not 200');
            assert.isArray(response.data.books, 'Data is not array');
            assert.isEmpty(response.data.books, 'Data is not empty');
        });
    });
});
