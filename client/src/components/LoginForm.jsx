import Button from "./ui/Button";
import Input from "./ui/Input";

import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center h-dvh">
        <h1 className="font-bold text-7xl">Login </h1>
        <p>Welcome back! Log in to access your account.</p>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-sm ">USERNAME:</label>
            <Input type="text" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">PASSWORD:</label>
            <Input type="password" />
          </div>
          <div className="place-items-end">
            <Button name="Log In" />
          </div>
          <p className="self-start ">
            Does not have an account?{" "}
            <Link to="/register" className="text-blue-600">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
