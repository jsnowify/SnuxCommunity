import { Outlet } from "react-router-dom";
import GetStarted from "./pages/GetStarted.jsx";

function App() {
  return (
    <>
      <GetStarted />
      <Outlet />
    </>
  );
}

export default App;
