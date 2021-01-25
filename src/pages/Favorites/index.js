import "./favorites.css";
import FavoriteItem from "../../Components/FavoriteItem/index.js";
import a from "../../images/gustavo-spindula-l7wrlsKDmCE-unsplash.png";
import DashBoard from "../../Components/DashBoard";
export default function AccountInfomation(props) {
  return (
    <div className="account">
      <DashBoard onClick={props.onClick} />
      <className className="fa">
        <span className="userInfo faspan">My favorites</span>
        <div className="ff">
          <FavoriteItem
            src={a}
            name="Casual flat loafers"
            size="Size - EU: 36 US: 5.5"
            price=" 10,000"
          />
          <FavoriteItem
            src={a}
            name="Casual flat loafers"
            size="Size - EU: 36 US: 5.5"
            price=" 10,000"
          />
        </div>
      </className>
    </div>
  );
}
