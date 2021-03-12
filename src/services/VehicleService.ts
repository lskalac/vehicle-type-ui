import http from "./http";

interface IFilter{
    page?: number,
    rpp?: number,
    searchTerm?: string
}

interface IVehicle{
    make: string,
    model: string,
    year: number
}

class VehicleService{
    private _baseUrl: string = "/vehicles";

    find(filter: IFilter){
        return http.get(this._baseUrl);
    }

    get(id: string){
        return http.post(this._baseUrl + '/{id}');
    }

    delete(id: string){
        return http.delete(this._baseUrl + '/{id}');
    }

    post(vehicle: IVehicle){
        return http.post(this._baseUrl);
    }
}

export default new VehicleService();