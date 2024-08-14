import React from "react";
import AuthOuterLayout from "../../components/auth/AuthOuterLayout";
import AuthInnerLayout from "../../components/auth/AuthInnerLayout";
import AuthPageTitle from "../../components/auth/AuthPageTitle";
import ChangePhoneForm from "../../components/auth/ChangePhoneForm";

function ChangePassword() {
  return (
    <AuthOuterLayout>
      <AuthInnerLayout>
        <AuthPageTitle
          title="현대중공업-새마을금고"
          description="휴대폰번호 변경"
        />
        <ChangePhoneForm />
      </AuthInnerLayout>
    </AuthOuterLayout>
  );
}

export default ChangePassword;
