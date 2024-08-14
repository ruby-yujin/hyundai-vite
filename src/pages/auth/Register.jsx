import React from "react";
import AuthOuterLayout from "../../components/auth/AuthOuterLayout";
import AuthInnerLayout from "../../components/auth/AuthInnerLayout";
import AuthPageTitle from "../../components/auth/AuthPageTitle";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <AuthOuterLayout>
      <AuthInnerLayout>
        <AuthPageTitle
          title="현대중공업-새마을금고"
          description="시스템사용 등록"
        />
        <RegisterForm />
      </AuthInnerLayout>
    </AuthOuterLayout>
  );
}

export default Register;
