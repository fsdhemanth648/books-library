import { HomeBanner } from "../../assets";
import Button from "../../components/common/Button";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 py-16">
      <div className="w-full md:w-1/2 ">
        <h1 className="text-2xl md:text-5xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10 text-base">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <Button variant="filled">Subscribe</Button>
      </div>

      <div className="w-full md:w-1/2 flex md:justify-end items-center">
        <img src={HomeBanner} alt="Home Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
