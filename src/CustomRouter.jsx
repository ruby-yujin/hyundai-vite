import { Routes, Route } from "react-router-dom";
import { ROUTER_PATH } from "./constants/constants";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ChangePassword from "./pages/auth/ChangePassword";
import ChangePhone from "./pages/auth/ChangePhone";
import AllMemberGroup from "./pages/member/AllMemberGroup";
import DeductionStatus from "./pages/member/DeductionStatus";
import DeductionStatusTotal from "./pages/member/DeductionStatusTotal";
import MemberManagement from "./pages/member/MemberManagement";
import MemberRegister from "./pages/member/MemberRegister";
import RegisterManagement from "./pages/register/RegisterManagement";

function CustomRouter() {
  return (
    <Routes>
      {/* 로그인 */}
      <Route path={ROUTER_PATH.login} element={<Login />} />
      {/* 시스템사용등록 */}
      <Route path={ROUTER_PATH.register} element={<Register />} />
      {/* 비밀번호 변경 */}
      <Route path={ROUTER_PATH.changePassword} element={<ChangePassword />} />
      {/* 전화번호 변경 */}
      <Route path={ROUTER_PATH.changePhone} element={<ChangePhone />} />

      {/*  로그인후  */}
      {/* 단체관리 - 첫페이지 */}
      <Route path={ROUTER_PATH.allMemberGroup} element={<AllMemberGroup />} />
      {/* 단체관리 - 단체별 공제현황 */}
      <Route path={ROUTER_PATH.deductionStatus} element={<DeductionStatus />} />
      {/* 단체관리 - 단체별 공제 집계 현황 */}
      <Route
        path={ROUTER_PATH.deductionStatusTotal}
        element={<DeductionStatusTotal />}
      />
      {/* 단체관리 - 단체 회원관리 */}
      <Route
        path={ROUTER_PATH.memberManagement}
        element={<MemberManagement />}
      />
      {/* 단체관리 - 단체 가입신청 */}
      <Route path={ROUTER_PATH.memberRegister} element={<MemberRegister />} />

      {/* 신청 관리(관리자) -  */}
      <Route
        path={ROUTER_PATH.registerManagement}
        element={<RegisterManagement />}
      />
    </Routes>
  );
}

export default CustomRouter;
