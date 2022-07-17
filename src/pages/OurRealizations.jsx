import Achievenements from "../components/achievements/Achievenements";
import CallUs from "../components/callUs/CallUs";
import Footer from "../components/footer/Footer";
import PageHeader from "../components/pageHeader/PageHeader";

const AchievenementsPage = () => {
  return (
    <>
      <PageHeader title="Nos Realisations" />
      <Achievenements />
      <CallUs />
      <Footer />
    </>
  );
};

export default AchievenementsPage;
