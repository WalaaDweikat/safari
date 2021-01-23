import "./cat.css";
import Line from "../../images/Line.png";
export default function Category() {
  return (
    <div className="cat">
      <div className="cat-1">
        <p>
          Category <span>Clear x</span>
        </p>
        <img src={Line} alt="" />
      </div>
      <div className="cat-2">
        <p>All</p>
        <p>Dresses</p>
        <p>Denim</p>
        <p>Jeans</p>
        <p>Jumpsuits</p>
        <p>Tops</p>
        <p>Jackets and coats</p>
        <p>Pants</p>
        <p>Shorts</p>
        <p>Skirts</p>
        <p>Loungerie {"&"} underwear</p>
        <p>Leather</p>
        <p>Sweaters {"&"} knits</p>
      </div>
    </div>
  );
}
