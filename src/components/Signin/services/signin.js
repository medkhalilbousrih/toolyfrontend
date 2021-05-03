import axios from "axios";

const login = async (data) => {
  const connectedUser = await axios.post("/api/login", data);
  window.localStorage.setItem(
    "connectedUser",
    JSON.stringify(connectedUser.data)
  );
  return connectedUser;
};

const loginFb = async (data) => {
  const connectedUser = await axios.post("/api/login/fb", data);
  window.localStorage.setItem(
    "connectedUser",
    JSON.stringify(connectedUser.data)
  );
  return connectedUser;
};

export default { login, loginFb };
