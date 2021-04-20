import { useContext } from "react";
import { RoleContext } from "../../contexts/RoleContext";
import Supplier from "../thesupplier/Supplier";
import Client from "../theclient/client";

const Profile = () => {
  const [role, setRole] = useContext(RoleContext);
  if (role === "supplier") {
    return <Supplier />;
  } else {
    return <Client />;
  }
};

export default Profile;
