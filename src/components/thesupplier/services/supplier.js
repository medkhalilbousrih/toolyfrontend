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

const getAll = async () => {
  const info = await axios.get("/api/users/mydata", config());
  return info.data;
};
const supplierService = { getAll };
export default supplierService;
