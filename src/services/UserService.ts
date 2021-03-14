import IUser from "../types/IUser";
import http from "./http";

class UserService
{
    private readonly _baseUrl: string = "/users";
    private readonly _storageKey: string = "token";

    login(user: IUser) {
        return http.put(this._baseUrl + '/login', user);
    }

    register(user: IUser) {
        return http.post(this._baseUrl + '/register');
    }

    getToken(): string | null {
        return localStorage.getItem(this._storageKey);
    }

    setToken(token: string): void {
        localStorage.setItem(this._storageKey, token);
    }

    removeToken(): void {
        localStorage.removeItem(this._storageKey);
    }

    isAuth(): boolean {
        return this.getToken() != null;
    }
}

export default new UserService();