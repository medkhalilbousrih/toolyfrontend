import axios from "axios";

const baseUrl = "https://tranquil-journey-35786.herokuapp.com/api/tools";

const getAll = async () => {
  const products = await axios.get(baseUrl);
  return products.data;
};

const catalogueService = { getAll };
export default catalogueService;
