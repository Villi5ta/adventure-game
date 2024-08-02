import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import Login from "../../components/Login/Login";
import SignUp from "../../components/Signup/Signup";

const Index = () => {
  return (
    <PageTemplate>
      <Login />
      <SignUp />
    </PageTemplate>
  );
};

export default Index;
