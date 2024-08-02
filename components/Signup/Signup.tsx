import React from "react";
import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import Input from "../Input/Input";

const SignUp = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const trySignUp = async () => {
    const loginData = {
      userName: name,
      email: email,
      password: password,
    };

    if (password.length < 5) {
      console.log("bad pass");
      return;
    }

    if (!name || !email || !password) {
      console.log("new user data bad");
    }

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/user/signup`,
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
      Sign up
      <Input
        title="Enter name"
        type="User"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Button title="Login" type="Login" onClick={trySignUp} />
    </div>
  );
};

export default SignUp;
