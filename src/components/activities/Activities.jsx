import "./activities.css";

const Activities = () => {
  const activities = [
    {
      title: "Programmation automate",
      desc: "Nos programmes d’automatismes sont réalisés dans un souci d’optimisation des installations (économies d’énergies, productivité, performance…) et sont élaborés à partir du cahier des charges ou de l’analyse fonctionnelle du client. Nous pouvons vous accompagner dans la réalisation de vos études pour un résultat optimal.",
    },
    {
      title: "Programmation régulation",
      desc: "Nos programmes d’automatismes sont réalisés dans un souci d’optimisation des installations (économies d’énergies, productivité, performance…) et sont élaborés à partir du cahier des charges ou de l’analyse fonctionnelle du client. Nous pouvons vous accompagner dans la réalisation de vos études pour un résultat optimal.",
    },
    {
      title: "Programmation supervision",
      desc: "Nos programmes d’automatismes sont réalisés dans un souci d’optimisation des installations (économies d’énergies, productivité, performance…) et sont élaborés à partir du cahier des charges ou de l’analyse fonctionnelle du client. Nous pouvons vous accompagner dans la réalisation de vos études pour un résultat optimal.",
    },
    {
      title: "Presentation sur site",
      desc: "Nos programmes d’automatismes sont réalisés dans un souci d’optimisation des installations (économies d’énergies, productivité, performance…) et sont élaborés à partir du cahier des charges ou de l’analyse fonctionnelle du client. Nous pouvons vous accompagner dans la réalisation de vos études pour un résultat optimal.",
    },
    {
      title: "Assistance",
      desc: "Nos programmes d’automatismes sont réalisés dans un souci d’optimisation des installations (économies d’énergies, productivité, performance…) et sont élaborés à partir du cahier des charges ou de l’analyse fonctionnelle du client. Nous pouvons vous accompagner dans la réalisation de vos études pour un résultat optimal.",
    },
  ];

  const renderActivities = () => {
    return activities.map(({ title, desc }, i) => (
      <div key={i} className="activities_item">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    ));
  };

  return (
    <div className="activities_section section">
      <div className="activities_container container">{renderActivities()}</div>
    </div>
  );
};

export default Activities;
