import fetch from 'superagent';

const API_URL = "https://stormy-peak-87832.herokuapp.com";


export async function fetchAuthSignUp(signUpObject) {
    return await fetch.post(API_URL + '/auth/signup')
        .send(signUpObject);
}

export async function fetchAuthLogin(loginObject) {
    return await fetch.post(API_URL + '/auth/login')
        .send(loginObject);
}

export async function fetchAllTodos(token) {
    return await fetch.get(API_URL + '/api/todos')
        .set({ Authorization: token });
}

export async function fetchPostTodo(token, todoObject) {
    return await fetch.post(API_URL + '/api/todos')
        .set({ Authorization: token })
        .send(todoObject);
}

export async function fetchPutTodo(token, objectId) {
    return await fetch.put(API_URL + '/api/todos/' + objectId)
        .set({ Authorization: token })
}


