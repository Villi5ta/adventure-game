import React from "react";
import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Login = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const tryLognin = async () => {
    const loginData = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      alert("Data bad");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/user/login`,
        loginData
      );

      if (response.status === 200) {
        cookie.set("jwt_token", response.data.jwt_token);
        alert("good");
        router.push("/about");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      Login
      <Input
        title="Enter password"
        type="User"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        title="Enter email"
        type="User"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button title="Login" type="Login" onClick={tryLognin} />
    </div>
  );
};

export default Login;
