import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth";
import { useForm } from "react-hook-form";
import SocalLogin from "../SocalLogin/SocalLogin";

const Login = () => {
  const location = useLocation()
   const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const handleSignInUser = (data) => {
    setLoading(true)
    console.log(data);
    signInUser(data.email, data.password)
      .then((res) => {
        setLoading(false)
        console.log(res.user);
        navigate(location.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-20">
      <div>
        <h1 className="text-4xl font-extrabold mb-3">create an Account</h1>
        <p className="mb-10">Login with ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handleSignInUser)}>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            placeholder="Enter Your Email"
            className="border border-gray-200 max-w-3/5 py-2  pl-2"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          <label>Password</label>
          <input
            placeholder="Enter Your Password"
            className="border border-gray-200 max-w-3/5 py-2  pl-2"
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/,
            })}
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password should be 6 character or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              at list 1 uppercase 1 lowercase 1 number and spacial character
            </p>
          )}
          <Link to="/forget">Forget Password?</Link>
          <button
          type="submit"
          value='Login'
  disabled={loading}
  className="border border-gray-200 max-w-3/5 mt-5 py-2 bg-primary flex items-center justify-center"
>
  {loading ? (
    <span className="loading loading-spinner loading-sm"></span>
  ) : (
    "Login"
  )}
</button>

        </div>
        <p className="mt-3 text-sm">
          Don’t have any account?
          <Link state={location.state} className="text-green-500 " to="/register">
            Register
          </Link>
        </p>

        <p className="text-center max-w-3/5 my-5">Or</p>
       <SocalLogin></SocalLogin>
      </form>
    </div>
  );
};

export default Login;
