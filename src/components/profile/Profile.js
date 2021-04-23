import { useContext } from "react";
import { RoleContext } from "../../contexts/RoleContext";
import Client from "../theclient/client";

import Supplier from "../thesupplier/Supplier";

const Profile = () => {
  const [role, setRole] = useContext(RoleContext);
  if (role === "supplier") {
    return <Supplier />;
  } else {
    return <Client />;
  }
};

export default Profile;
