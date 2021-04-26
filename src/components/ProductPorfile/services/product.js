import axios from "axios";

const getInfo = async (id) => {
  const info = await axios.get(`/api/tools/${id}`);
  return info.data;
};

export default { getInfo };
