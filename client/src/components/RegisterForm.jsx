import { Link } from "react-router-dom";
import Button from "./ui/Button";
import Input from "./ui/Input";

const RegisterForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center h-dvh">
        <h1 className="text-4xl">Create Account</h1>
        <p>Your journey starts here today!</p>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-base">FIRST NAME:</label>
            <Input type="text" />
          </div>
          <div className="flex flex-col">
            <label className="text-base">LAST NAME:</label>
            <Input type="text" />
          </div>
          <div className="flex flex-col">
            <label className="text-base">USERNAME:</label>
            <Input type="text" />
          </div>

          <div className="flex flex-col">
            <label className="text-base">EMAIL:</label>
            <Input type="email" />
          </div>

          <div className="flex flex-col">
            <label className="text-base">PASSWORD:</label>
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
