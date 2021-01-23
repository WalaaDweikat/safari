import "./color.css";
import Line from "../../images/Line.png";
export default function Colour() {
  return (
    <div className="color">
      <div className="color-1">
        <p>
          COLOR <span>Clear x</span>
        </p>
        <img src={Line} alt="" />
      </div>
      <div className="color-2">
        <div className="bc">
          <button style={{ backgroundColor: "beige" }} />
          <span>Beige</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "blue" }} />
          <span>Blue</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "black" }} />
          <span>Black</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "orange" }} />
          <span>Orange</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "green" }} />
          <span>Green</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "brown" }} />
          <span>Brown</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "purple" }} />
          <span>Purple</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "gold" }} />
          <span>Gold</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "taupe" }} />
          <span>Taupe</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "white" }} />
          <span>White</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "pink" }} />
          <span>Pink</span>
        </div>
        <div className="bc">
          <button style={{ backgroundColor: "red" }} />
          <span>Red</span>
        </div>
      </div>
    </div>
  );
}
