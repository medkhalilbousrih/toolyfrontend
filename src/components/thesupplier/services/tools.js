import axios from "axios";
const baseUrl = "/tools";

const create = async (tool) => {
  const newTool = await axios.post(baseUrl, tool);
  return newTool.data;
};

const getAll = async () => {
  const tools = await axios.get(baseUrl);
  return tools.data;
};

const toolService = { create, getAll };
export default toolService;
