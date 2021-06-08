import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../helpers';
import config from '../config';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    signUp,
    updateUser,
    validateRegistration,
    confirmEmail,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};

async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    const response = await fetch(config.authLogin, requestOptions);
    const user = await handleResponse(response);

    // Store user details and JWT token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUserSubject.next(user);
    return user;
}


async function signUp(username, email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email })
    };

    const response = await fetch(config.authSignUp, requestOptions);
    const user = await handleResponse(response);

    return user;
}

async function validateRegistration(username, email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email })
    };

    const response = await fetch(config.authValidate, requestOptions);
    const validation = await handleResponse(response);
    
    return validation;
}

async function confirmEmail(token) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
    };

    const response = await fetch(config.confirmEmail, requestOptions);
    const validation = await handleResponse(response);

    if (validation.hasOwnProperty('success')) {
        return true;
    } else {
        return false
    }
}

function updateUser(userObject) {
    localStorage.setItem('currentUser', JSON.stringify(userObject));
    currentUserSubject.next(userObject);
}

function logout() {
    // Remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
