import Activities from "../components/activities/Activities";
import PageHeader from "../components/pageHeader/PageHeader";
import CallUs from "../components/callUs/CallUs";
import Footer from "../components/footer/Footer";

const OurActivitiesPage = () => {
  return (
    <>
      <PageHeader title="Nos Activités" />
      <Activities />
      <CallUs />
      <Footer />
    </>
  );
};

export default OurActivitiesPage;
