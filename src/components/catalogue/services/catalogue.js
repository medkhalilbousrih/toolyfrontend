import axios from "axios";

const baseUrl = "/api/tools";

const getAll = async () => {
  const products = await axios.get(baseUrl);
  return products.data;
};

const catalogueService = { getAll };
export default catalogueService;
