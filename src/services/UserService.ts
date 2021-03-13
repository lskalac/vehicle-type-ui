import http from "./http";

interface IUser{
    username: string,
    password: string
}

class UserService{
    private _baseUrl: string = "/users";

    login(user: IUser){
        return http.put(this._baseUrl + '/login', user);
    }

    register(user: IUser){
        return http.post(this._baseUrl + '/register');
    }
}

export default new UserService();