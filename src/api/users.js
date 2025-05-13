
const BASE_URL = 'https://ramdomuser.me/api/';

export const getUsers= () => {
    return axios.get(`${BASE_URL}?results=20`)



}