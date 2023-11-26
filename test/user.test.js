import { assert } from 'chai';
import { describe, it } from 'mocha';
import { createUser, getUser } from '../api/user.js';

describe('Create user - Happy Paths', () => {
    let userName;
    let password;
    let data;
    let status;
    before(async () => {
        userName = 'tsvetan-iliev' + Math.floor(Math.random() * 10000);
        password = 'Cesc123!';
        try {
            const response = await createUser(userName, password);
            data = response.data;
            status = response.status;
        } catch (error) {
            assert.fail('Failed to create user');
        }
    });

    describe('Create user successfully', () => {
        it('Status code must be 201', async () => {
            assert.equal(status, 201, 'Status is not 201');
        });

        it('Response object has property "userId"', async () => {
            assert.property(data, 'userId', 'userId property is not present');
            assert.isString(data.userId, 'userId is not string');
        });

        it('Response object has property "username"', async () => {
            assert.property(
                data,
                'username',
                'username property is not present'
            );
            assert.isString(data.username, 'username is not string');
        });

        it('Response object has property "books"', async () => {
            assert.property(data, 'books', 'books property is not present');
            assert.isArray(data.books, 'books is not array');
        });

        it('Created user is in the database', async () => {
            const response = await getUser(
                userName,
                password,
                data.userId || data.userID
            );

            assert.equal(response.status, 200, 'Status is not 200');
            assert.equal(response.data.username, userName, 'Username is wrong');
            assert.equal(
                response.data.userId,
                data.userId || data.userID,
                'UserId is wrong'
            );
        });
    });
});

describe('Create user - Negative Paths', () => {
    let userName;
    let password;
    let response;

    describe('Should not create user with existing username', () => {
        it('should return status code - 400, 404 or 406 ', async () => {
            userName = 'seskobg';
            password = 'Cesc123!';
            response = await createUser(userName, password);
            assert.oneOf(
                response.status,
                [400, 404, 406],
                'Status is not 400, 404 or 406'
            );
        });

        it('should return error message', async () => {
            assert.isString(response.data.message, 'Message is not string');
            assert.equal(
                response.data.message,
                'User exists!',
                'Message is not "User exists!"'
            );
        });

        it('should return number error code ', async () => {
            assert.isNumber(response.data.code, 'Code is not number');
        });
    });

    describe('should not create user with invalid data', () => {
        userName = 'test-seskobg' + Math.floor(Math.random() * 10000);
        it('missing username should return status code - 400, 404 or 406 ', async () => {
            response = await createUser('', password);
            assert.oneOf(
                response.status,
                [400, 404, 406],
                'Status is not 400, 404 or 406'
            );
        });

        it('missing username should return error message', async () => {
            assert.isString(response.data.message, 'Message is not string');
            assert.equal(
                response.data.message,
                'UserName and Password required.',
                'Message is not "UserName and Password required."'
            );
        });

        it('missing password should return status code - 400, 404 or 406 ', async () => {
            response = await createUser(userName, '');
            assert.oneOf(
                response.status,
                [400, 404, 406],
                'Status is not 400, 404 or 406'
            );
        });

        it('missing password should return should return error message', async () => {
            assert.isString(response.data.message, 'Message is not string');
            assert.equal(
                response.data.message,
                'UserName and Password required.',
                'Message is not "UserName and Password required."'
            );
        });

        it('invalid password should return status code - 400, 404 or 406 ', async () => {
            password = '123';
            response = await createUser(userName, password);
            assert.oneOf(
                response.status,
                [400, 404, 406],
                'Status is not 400, 404 or 406'
            );
        });
    });
});
