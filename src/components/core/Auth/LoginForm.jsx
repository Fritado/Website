import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../../common/Button";
import Logo2 from "../../../data/Logo.png";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { firstname, lastname, email, password, confirmPassword } = formData;

  return (
    <div className="bg-hero-pattern w-full px-14 flex flex-col items-center justify-center mx-auto">
      <div
        className="bg-white w-[160px] h-[130px]"
        style={{ borderRadius: "50%" }}
      >
        <img src={Logo2} alt="login-Logo" className="w-[130px]  mt-8 ml-4" />
      </div>
      <h1 className="text-2xl font-semibold text-justify text-[#2f5c83]  mt-4">
        Welcome Back ANISHA {formData.firstname}
      </h1>

      {/*Form */}
      <form className="w-full px-14 pb- pt-6 gap-y-8 flex flex-col max-w-[520px]">
        <div className="flex relative h-[2.8rem]">
          <input
            required
            type="text"
            name="email"
            placeholder="Enter Email address"
            value={email}
            style={{
              boxShadow:
                "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20)",
            }}
            className="h-full p-[1.5rem] w-full"
          />
        </div>

        <div className="flex  w-full flex-col relative h-[3rem]">
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={password}
            style={{
              boxShadow:
                "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20)",
            }}
            className="h-full p-[1.5rem] w-full
            "
          />
          <span className="absolute right-3 top-[13px] z-[10] cursor-pointer">
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={25} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={25} fill="#AFB2BF" />
            )}
          </span>
        </div>

        <div className="flex flex-col">
          <p className="font-medium leading-4 text-[#6f94b3] text-justify">
            Already have an account?{" "}
            <span className=" text-[#2f5c83]"> Get password help</span>
          </p>
        </div>
          <div className="">
            <Button type="submit" linkto="#" active={false}>
              Sign In
            </Button>
          </div>
      </form>
    </div>
  );
};

export default LoginForm;
