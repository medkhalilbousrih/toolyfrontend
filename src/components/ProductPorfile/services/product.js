import axios from "axios";

const config = () => {
  const connectedUser = window.localStorage.getItem("connectedUser");
  if (connectedUser) {
    const user = JSON.parse(connectedUser);
    return {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
  }
};

const getInfo = async (id) => {
  const info = await axios.get(`/api/tools/${id}`);
  return info.data;
};

const rentTool = async (tool) => {
  const RentedTool = await axios.put("/api/tools/rent", tool, config());
  return RentedTool.data;
};

export default { getInfo, rentTool };
