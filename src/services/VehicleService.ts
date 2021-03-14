import IFilter from "../types/IFilter";
import IVehicle from "../types/IVehicle";
import http from "./http";
import UserService from "./UserService";

class VehicleService{
    private _baseUrl: string = "/vehicles";

    find(filter: IFilter){
        return http.get(this._baseUrl, {params: filter});
    }

    get(id: string){
        return http.post(this._baseUrl + `/${id}`);
    }

    delete(id: string){
        return http.delete(this._baseUrl + `/${id}`, {headers: this.getAuthorization()});
    }

    post(vehicle: IVehicle){
        return http.post(this._baseUrl, vehicle, {headers: this.getAuthorization()});
    }

    private getAuthorization(){
        return {
            'Authorization': `Bearer ${UserService.getToken()}` 
        };
    }
}

export default new VehicleService();