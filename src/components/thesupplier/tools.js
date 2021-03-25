import toolService from "./services/tools";
import { useState, useEffect } from "react";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    toolService.getAll().then((res) => setTools(res));
  }, []);
  return (
    <div>
      {tools.map((tool) => (
        <p>{tool.name}</p>
      ))}
    </div>
  );
};
export default Tools;
