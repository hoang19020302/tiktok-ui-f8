import Header from "../../share_cpn/header/Header";
import "../../styles/background.scss";

function Homepage() {
  return (
    <div className="home-page">
      <Header />
      <img
        src="images/background_image.png"
        alt=""
        className="background-image"
      />
    </div>
  );
}

export default Homepage;
