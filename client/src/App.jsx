import { Outlet } from "react-router-dom";
import GetStarted from "./pages/GetStarted.jsx";
import Login from "./pages/Login.jsx";
function App() {
  return (
    <>
      <GetStarted />
      <Outlet />
    </>
  );
}

export default App;
