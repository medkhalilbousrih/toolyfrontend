import CatalogueCards from "./CatalogueCards";
import { useEffect, useState } from "react";
import catalogueService from "./services/catalogue";
import Top from "./Top";

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
      <Top />
      {tools.map((tool) => (
        <CatalogueCards key={tool.id} tool={tool} />
      ))}
    </>
  );
};

export default Catalogue;
