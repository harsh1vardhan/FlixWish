import axios from "axios"; // Import the Axios library for making HTTP requests.

const BASE_URL = "https://api.themoviedb.org/3"; // Define the base URL for the TMDb API.
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;  // Get the API token from environment variables.


const headers = {
    Authorization: "bearer " + TMDB_TOKEN, // Create an Authorization header with the API token.
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data; // Return the response data if the request is successful.
    } catch (err) {
        console.log(err);  // Log any errors to the console.
        return err;  // Return the error object.

    }
};
