import urlJoin from "url-join";
import constants from "../utils/constants";
import { ApiResponseError } from "../exceptions/wp";

export class ProyectoCaller{
    static async listAll(page=1, perPage = 10){
        const query = `?per_page=${perPage}&page=${page}`;
        const uri = urlJoin(constants.wpApi.host, constants.wpApi.base, constants.wpApi.endpoints.proyecto);
        const url = uri + query;
        const response = await fetch(url);
        const dataRow = await response.text();
        if(!response.ok) throw new ApiResponseError(dataRow);
        const data = JSON.parse(dataRow);
        return data;
    }

    static async getOne(id){
        try{

            const url = urlJoin(constants.wpApi.host, constants.wpApi.base, constants.wpApi.endpoints.proyecto, id +"");
            const response = await fetch(url);
            const dataRow = await response.text();
            if(!response.ok) throw new ApiResponseError(dataRow);
            const data = JSON.parse(dataRow);
            return data;
        }catch(error){
            return {
                failed: true,
                error
            };
        }
    }
}