import Banner from "./Banner";
import News from "./News";
import Recommended from "./Recommended";
import TopSellers from "./TopSellers";

const HomeContainer = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </div>
  );
};

export default HomeContainer;
