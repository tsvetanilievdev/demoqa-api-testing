import axios from 'axios';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('Account', async () => {
    // it('Register user ', () => {
    //     axios
    //         .post(
    //             'https://demoqa.com/Account/v1/User',
    //             {
    //                 userName: 'testuser_cesc',
    //                 password: 'Testpassword1!',
    //             },
    //             {
    //                 auth: {
    //                     username: 'ToolsQA',
    //                     password: 'TestPassword',
    //                 },
    //             }
    //         )
    //         .then((response) => {
    //             console.log(response.data);
    //             console.log(response.status);
    //             console.log(response.statusText);
    //             console.log(response.headers);
    //             console.log(response.config);
    //         });
    // });
    it('Authorize user ', async () => {
        const response = await axios.post(
            'https://demoqa.com/Account/v1/Authorized',
            {
                userName: 'seskobg',
                password: 'Cesc123!',
            }
        );
        expect(response.data).to.eql(false, 'User is not authorized');
        expect(response.status).to.eql(
            200,
            `Status is not 200 but ${response.status}`
        );
        console.log(response.statusText);
    });
});

describe('BookStore', async () => {});
