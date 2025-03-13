import React from "react";
import { useToken } from "../../hooks/useToken";

const Admin: React.FC = () => {
  const { token } = useToken();
  return <div>{token}</div>;
};

export default Admin;
