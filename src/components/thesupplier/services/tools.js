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

const getCategories = async () => {
  const categories = await axios.get("/api/categories");
  return categories.data;
};

const toolDelete = async (id) => {
  await axios.delete(`${baseUrl}/${id}`, config());
};

const toolUpdate = async (id, tooll) => {
  const updatedTool = await axios.put(
    `${baseUrl}/update/${id}`,
    tooll,
    config()
  );
  return updatedTool.data;
};

const toolService = { create, getCategories, toolDelete, toolUpdate };

export default toolService;
