import CatalogueCards from "./CatalogueCards";
import { useEffect, useState } from "react";
import catalogueService from "./services/catalogue";

const Catalogue = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    catalogueService
      .getAll()
      .then((res) => setTools(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(tools);
  return (
    <>
      {tools.map((tool) => (
        <CatalogueCards key={tool.id} tool={tool} />
      ))}
    </>
  );
};

export default Catalogue;
