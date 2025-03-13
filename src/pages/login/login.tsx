import React from "react";
import { postLogin } from "../../services/auth";
import { useToken } from "../../hooks/useToken";
import { useNavigate } from "react-router";
import InputField from "../../component/input-field/input-field";

const Login: React.FC = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      const response = await postLogin({ username, password });

      changeToken(response.accessToken);
      localStorage.setItem("token", response.accessToken);
      navigate("/admin");
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full h-screen gap-1.5"
    >
      <h1>Username</h1>
      <InputField type="text" name="username" />

      <h1>Password</h1>
      <InputField type="password" name="password" />

      <button
        type="submit"
        className="bg-blue-200 hover:bg-blue-300 py-5 px-10 rounded-lg"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
