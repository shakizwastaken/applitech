import "./pageHeader.css";

const PageHeader = ({ title }) => {
  return (
    <div className="pageHeader section">
      <div className="pageHeader_container container">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
