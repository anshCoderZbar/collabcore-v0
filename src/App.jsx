import { useEffect } from "react";
import { AllRoutes } from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  const auth = false;
  return <AllRoutes auth={auth} />;
}

export default App;
