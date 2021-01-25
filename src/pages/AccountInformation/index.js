import "./account.css";
import UserInformation from "../../Components/UserInformation";
import DashBoard from "../../Components/DashBoard/index.js";
export default function AccountInfomation() {
  return (
    <div className="account">
      <DashBoard />
      <UserInformation />
    </div>
  );
}
