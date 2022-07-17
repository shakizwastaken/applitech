import "./callUs.css";

import ContactBtn from "../ContactBtn/ContactBtn";

const CallUs = () => {
  return (
    <div className="callUs section">
      <div className="callUs_container container">
        <h1>Appelez nous!</h1>
        <p>
          Appelez nous dez maintenant et ayez un conseil de chez un de nos
          experts !
        </p>
        <ContactBtn className="btn btn-fillAccent btn-callUs_section" />
      </div>
    </div>
  );
};

export default CallUs;
