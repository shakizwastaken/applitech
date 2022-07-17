import { logos } from "../../utils/assetsImport";
import "./footer.css";

import ContactBtn from "../ContactBtn/ContactBtn";

const Footer = () => {
  const info = {
    //address
    address_line1: "ZA LES boubker DU VELAY",
    address_line2: "43330 PONT SALOMON",

    //contact phone
    tel: "04 71 61 24 49",
    fax: "04 71 61 60 45",

    //contact email
    email: "contact@appli-tec.fr",
  };

  return (
    <div className="footer_section section">
      <div className="footer_container container">
        <div className="footer_info">
          <h1>APPLI-TEC</h1>
          <div className="footer_adress">
            <h1>{info.address_line1}</h1>
            <h1>{info.address_line2}</h1>
          </div>
          <div className="footer_tel">
            <h1> Tel: {info.tel}</h1>
            <h1> Fax: {info.fax}</h1>
          </div>

          <div className="footer_email">
            <h1>Email: {info.email}</h1>
          </div>
        </div>
        <div className="footer_callUs">
          <div className="footer_callUs_logoContainer">
            <img src={logos.flatLogoLight} alt="flat logo company" />
          </div>
          <div className="footer_callUs_cta">
            <h1>Appelez nous !</h1>
            <p>
              Appelez nous dez maintenant et ayez un conseil de chez un de nos
              experts !
            </p>
            <ContactBtn className="btn btn-fillAccent btn-footer_cta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
