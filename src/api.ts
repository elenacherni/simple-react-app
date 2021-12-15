import axios from 'axios'
export interface User {
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string
}

export const api = {
    //data status options
    DATA_INIT: 0,
    DATA_LOADING: 1,
    DATA_ERROR: 2,
    DATA_READY: 3,

    getUsers: async () => {
        try {
            const res = await axios.get('https://gorest.co.in/public/v1/users');
            const users = res.data.data;
            return users;
        }
        catch (error) {
            return error;
        }
    }
}