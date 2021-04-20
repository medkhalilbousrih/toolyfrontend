import axios from "axios";

const baseUrl = "https://tranquil-journey-35786.herokuapp.com/api/tools";
const connectedUser = window.localStorage.getItem("connectedUser");
const user = JSON.parse(connectedUser);

const config = {
  headers: {
    Authorization: `Bearer ${user.token}`,
    "content-type": "multipart/form-data",
  },
};

const create = async (tool) => {
  const newTool = await axios.post(baseUrl, tool, config);
  return newTool.data;
};

const toolService = { create };

export default toolService;
