import "./whyUs.css";

import { logos } from "../../utils/assetsImport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faClock,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

const WhyUs = () => {
  const reasons = [
    {
      label: "Qualite",
      icon: <FontAwesomeIcon icon={faCircleCheck} />,
      desc: "Notre qualite de travail est la meilleure dans le marche.",
    },
    {
      label: "Prix",
      icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
      desc: "Un prix incomparable,pour une haute qualite de travail.",
    },
    {
      label: "Vitesse de traitement",
      icon: <FontAwesomeIcon icon={faClock} />,
      desc: "Un prix incomparable,pour une haute qualite de travail.",
    },
    {
      label: "Experience",
      icon: <FontAwesomeIcon icon={faCircleCheck} />,
      desc: "Une equipe avec une experience dans le domaine pour plus de 10 ans !",
    },
  ];

  const renderReasons = () => {
    return reasons.map(({ label, icon, desc }) => (
      <div className="whyUs_item">
        <div className="whyUs_item_icon">{icon}</div>
        <h1>{label}</h1>
        <p>{desc}</p>
      </div>
    ));
  };

  return (
    <div className="whyUs">
      <div className="whyUs_container container">
        <div className="whyUs_header">
          <h1>Pourquoi choisir </h1>
          <img src={logos.stackLogo} alt="stacked logo" />
          <h1>?</h1>
        </div>
        <div className="whyUs_items">{renderReasons()}</div>
      </div>
    </div>
  );
};

export default WhyUs;
