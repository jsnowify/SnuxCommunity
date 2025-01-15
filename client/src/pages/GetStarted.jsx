import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
const GetStarted = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-dvh">
      <h1 className="font-bold text-7xl">Snux</h1>
      <p>Get involved with people and events around you.</p>
      <div className="mt-3">
        <Link to="/login">
          <Button name="Get Started" />
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
