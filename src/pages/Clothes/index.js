import "./clothes.css";
import Cat from "../../Components/Category/index.js";
import Size from "../../Components/Size/index.js";
import Color from "../../Components/Colour/index.js";
import Buy from "../../Components/Buy/index.js";
export default function Clothes() {
  return (
    <div className="clothes">
      <h1>CLOTHES</h1>
      <div className="cl">
        <div className="clothes-1">
          <Cat />
          <Size />
          <Color />
        </div>
        <Buy />
      </div>
    </div>
  );
}
