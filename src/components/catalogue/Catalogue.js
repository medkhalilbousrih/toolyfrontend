import CatalogueCards from "./CatalogueCards";
import { useEffect, useState } from "react";
import catalogueService from "./services/catalogue";
import Top from "./Top";
import { useParams } from "react-router-dom";

const Catalogue = () => {
  const [tools, setTools] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    catalogueService
      .getCategoyTools(category)
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
