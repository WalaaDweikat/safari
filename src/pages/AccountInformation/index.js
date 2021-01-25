import "./account.css";
import UserInformation from "../../Components/UserInformation";
import DashBoard from "../../Components/DashBoard/index.js";
export default function AccountInfomation(props) {
  return (
    <div className="account">
      <DashBoard onClick={props.onClick} />
      <UserInformation />
    </div>
  );
}
