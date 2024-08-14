import React from "react";
import AuthOuterLayout from "../../components/auth/AuthOuterLayout";
import AuthInnerLayout from "../../components/auth/AuthInnerLayout";
import AuthPageTitle from "../../components/auth/AuthPageTitle";
import ChangePasswordForm from "../../components/auth/ChangePasswordForm";

function ChangePassword() {
  return (
    <AuthOuterLayout>
      <AuthInnerLayout>
        <AuthPageTitle
          title="현대중공업-새마을금고"
          description="비밀번호 변경"
        />
        <ChangePasswordForm />
      </AuthInnerLayout>
    </AuthOuterLayout>
  );
}

export default ChangePassword;
