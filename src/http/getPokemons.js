import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon/?limit=12";

export const getPokemons = async (url = URL) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    alert(error);
  }
};
