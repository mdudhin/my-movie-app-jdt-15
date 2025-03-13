import React from "react";
import { postLogin } from "../../services/auth";
import { useToken } from "../../hooks/useToken";
import { useNavigate } from "react-router";

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
      <input type="text" name="username" className="border p-3 rounded-sm" />

      <h1>Password</h1>
      <input
        type="password"
        name="password"
        className="border p-3 rounded-sm"
      />

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
