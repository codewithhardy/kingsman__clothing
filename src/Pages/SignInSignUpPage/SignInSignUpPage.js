import React from "react";
import "./signinsignup.style.scss";
import SignIn from "../../Component/sign-in/SignIn";
import SignUp from "../../Component/signup/SignUp";

function SignInAndSignUpPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUpPage;
