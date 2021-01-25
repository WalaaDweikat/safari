import "./home.css";
import LogoBackground from "../../images/LogoBackground.png";
import pic from "../../images/pic.png";
import Line from "../../images/Line.png";
import arrow from "../../images/arrow.png";
import Buy from "../../Components/Buy";
import "firebase/firestore";
import firebase from "../../firebase.Config.js";
const db = firebase.firestore();
export default function Home() {
  let data = [];
  const da = db
    .collection("clothes")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        data.push(doc.data());
      });
      console.log(data);
    });

  return (
    <div className="home">
      <div className="homeFirstPart">
        <img src={LogoBackground} alt="" className="LB" />
        <img src={pic} alt="" className="pic1" />
        <div className="Explore">
          <span>Explore our collection</span>
          <a href="#shop-your-style">
            <img src={arrow} alt="" className="arrow" />
          </a>
        </div>
      </div>

      <div className="homeSecondPart" id="shop-your-style">
        <div className="shop">
          <img src={Line} alt="" className="Line" />
          <span>Shop your style</span>
          <img src={Line} alt="" className="Line" />
        </div>
        <p className="des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </p>
      </div>

      <Buy />
    </div>
  );
}
