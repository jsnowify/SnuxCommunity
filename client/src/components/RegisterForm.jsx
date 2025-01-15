import { Link } from "react-router-dom";
import Button from "./ui/Button";
import Input from "./ui/Input";

const RegisterForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center h-dvh">
        <h1 className="font-bold text-7xl">Create Account</h1>
        <p>Your journey starts here today!</p>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-sm">FIRST NAME:</label>
            <Input type="text" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">LAST NAME:</label>
            <Input type="text" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">USERNAME:</label>
            <Input type="text" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm">EMAIL:</label>
            <Input type="email" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm">PASSWORD:</label>
            <Input type="password" />
          </div>
          <div className="place-items-end">
            <Button name="Create" />
          </div>
          <p className="self-start ">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
