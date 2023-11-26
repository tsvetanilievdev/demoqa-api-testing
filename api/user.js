import axios from 'axios';

const url = 'https://demoqa.com/Account/v1';

export async function createUser(userName, password) {
    try {
        const response = await axios.post(url + '/User', {
            userName,
            password,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getUser(userName, password, userId) {
    try {
        const response = await axios.get(url + '/User/' + userId, {
            auth: {
                username: userName,
                password: password,
            },
        });
        return response;
    } catch (error) {
        return error.response;
    }
}
