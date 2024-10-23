import { HomeBanner } from "../../assets";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 ">
        <h1 className="text-2xl md:text-5xl font-medium">
          New Releases This Week
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <img src={HomeBanner} />
      </div>
    </div>
  );
};

export default Banner;
