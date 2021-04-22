import axios from "axios";

const baseUrl = "/api/tools";

const config = () => {
  const connectedUser = window.localStorage.getItem("connectedUser");
  if (connectedUser) {
    const user = JSON.parse(connectedUser);
    return {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "content-type": "multipart/form-data",
      },
    };
  }
};

const create = async (tool) => {
  const newTool = await axios.post(baseUrl, tool, config());
  return newTool.data;
};

const toolService = { create };

export default toolService;
