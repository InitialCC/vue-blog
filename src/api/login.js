import request from "../utils/request"
export function login(username, password) {
    const data = {
        username,
        password
    };
    console.log(1)
    return request({
        url: '/login',
        method: 'post',
        data
    });

    // return fetch('/api/login', {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // return axios.post('/login', data);
}