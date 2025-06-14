import axios from 'axios';


export const MovieCategory = async (API_URL)=>{
    try{
        const response = await axios.get(API_URL)
        return response.data;

    }catch (error){
        console.error("Error whle fetching the api data ", error.message);
        return error.response.data;
         
    }
}
