import catalogueService from "./services/catalogue";
import { useEffect } from "react";
const Catalogue = () => {
  useEffect(async () => {
    const aa = await catalogueService.getAll();
    console.log(aa);
  }, []);

  return <div>aaaaa</div>;
};

export default Catalogue;
