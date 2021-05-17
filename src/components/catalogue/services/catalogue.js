import axios from "axios";

const baseUrl = "/api/tools";

const getAll = async () => {
  const products = await axios.get(baseUrl);
  return products.data;
};

const getCategoyTools = async (category) => {
  const products = await axios.get(`${baseUrl}?category=${category}`);
  return products.data;
};

const catalogueService = { getAll, getCategoyTools };
export default catalogueService;
