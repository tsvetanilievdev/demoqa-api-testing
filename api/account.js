import axios from 'axios';

const url = 'https://demoqa.com/Account/v1';

export async function createAccount(userName, password) {
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

export async function getAccount(userId) {
    try {
        const response = await axios.get(url + '/User/' + userId);
        return response;
    } catch (error) {
        return error.response;
    }
}
