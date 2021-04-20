import axios from "axios";

const connectedUser = window.localStorage.getItem("connectedUser");
const user = JSON.parse(connectedUser);

const config = {
  headers: {
    Authorization: `Bearer ${user.token}`,
  },
};

const getAll = async () => {
  const info = await axios.get(
    "https://tranquil-journey-35786.herokuapp.com/api/users/mydata",
    config
  );
  return info.data;
};
const supplierService = { getAll };
export default supplierService;
