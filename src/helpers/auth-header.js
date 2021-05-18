import { authenticationService } from '../services';

export function authHeader() {
    // Return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.access_token) {
        return { Authorization: `Bearer ${currentUser.access_token}` };
    } else {
        return {};
    }
}

export function refreshHeader() {
    // Return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.refresh_token) {
        return { Authorization: `Bearer ${currentUser.refresh_token}` };
    } else {
        return {};
    }
}

export function accessToken() {
    // Return jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.access_token) {
        return currentUser.access_token;
    } else {
        return {};
    }
}

export function refreshToken() {
    // Return jwt refresh token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.refresh_token) {
        return currentUser.refresh_token;
    } else {
        return false;
    }
}