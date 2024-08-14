import React from "react";
import AuthOuterLayout from "../../components/auth/AuthOuterLayout";
import AuthInnerLayout from "../../components/auth/AuthInnerLayout";
import AuthPageTitle from "../../components/auth/AuthPageTitle";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <AuthOuterLayout>
      <AuthInnerLayout>
        <AuthPageTitle
          title="현대중공업-새마을금고"
          description="단체회비 고객시스템"
        />
        <LoginForm />
      </AuthInnerLayout>
    </AuthOuterLayout>
  );
}

export default Login;
