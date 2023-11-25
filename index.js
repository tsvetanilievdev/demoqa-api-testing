import axios from 'axios';
import { describe, it } from 'mocha';

describe('API Test', () => {
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
    it('Authorize user ', () => {
        axios
            .post('https://demoqa.com/Account/v1/Authorized', {
                userName: 'seskobg',
                password: 'Cesc123!',
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            });
    });
});
