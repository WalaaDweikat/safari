import "./home.css";
import LogoBackground from "../../images/LogoBackground.png";
import pic from "../../images/pic.png";
import Line from "../../images/Line.png";
import axios from "axios";

export default function Home() {
  fetch("https://fakestoreapi.com/products?limit=40")
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="home">
      {/* <div className="homeFirstPart">
        <img src={LogoBackground} alt="" className="LB" />
        <img src={pic} alt="" className="pic1" />
      </div> */}

      <div className="homeSecondPart">
        <div className="shop">
          <div>
            <img src={Line} alt="" />
          </div>
          <h1>Shop your style</h1>
          <div>
            <img src={Line} alt="" />
          </div>
        </div>
        <p className="des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </p>
      </div>
    </div>
  );
}
