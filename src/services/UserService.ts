import http from "./http";

interface IUser{
    username: string,
    password: string
}

class UserService{
    private _baseUrl: string = "/users";

    login(user: IUser){
        return http.put(this._baseUrl);
    }

    register(user: IUser){
        return http.post(this._baseUrl);
    }
}

export default new UserService();