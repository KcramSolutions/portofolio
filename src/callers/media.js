import urlJoin from "url-join";
import constants from "../utils/constants";
import { ApiResponseError } from "../exceptions/wp";

export async function getMedia(id){
    const url = urlJoin(constants.wpApi.host, constants.wpApi.base, constants.wpApi.endpoints.media, id + "");
    const response = await fetch(url);
    const dataRaw = await response.text();
    if(!response.ok) throw new ApiResponseError(dataRaw);
    const data = JSON.parse(dataRaw);
    return data;
}