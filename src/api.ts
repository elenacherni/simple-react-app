import axios from 'axios'
export interface User {
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string
}

export const api = {
    //data status vars
    DATA_INIT: 0,
    DATA_LOADING: 1,
    DATA_ERROR: 2,
    DATA_READY: 3,

    getUsers: async () => {
        try {
            const res = await axios.get('https://gorest.co.in/public/v1/users');
            const users = res.data.data;
            //regex
            // users.forEach( user => {
                
            // });
            return users;
        }
        catch (error) {
            return error;
        }
    }
}