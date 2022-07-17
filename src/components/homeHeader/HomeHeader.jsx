import ContactBtn from "../ContactBtn/ContactBtn";
import "./homeHeader.css";

const HomeHeader = () => {
  return (
    <div className="homeHeader section">
      <div className="homeHeader_container container">
        <div className="homeHeader_head">
          <div className="homeHeader_line">
            <h1>Une </h1>
            <h1 className="text-accent">solution </h1>
          </div>
          <div className="homeHeader_line">
            <h1>pour tout vos</h1>
          </div>
          <div className="homeHeader_line">
            <h1 className="text-accent">problemes</h1>
            <h1>.</h1>
          </div>
        </div>
        <ContactBtn className="btn btn-fillMain btn-homeHeader" />
      </div>
    </div>
  );
};

export default HomeHeader;
