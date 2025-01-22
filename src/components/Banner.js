import { LuPopcorn } from "react-icons/lu";
const Banner = () => {
  return (
    <section className="banner">
      <div className="popcorn"><LuPopcorn/></div>
      <div className="banner-text">
        <div className="p-txt">
          <p>The Netflix you love for just KRW 5,500.</p>
          <p>Get our most affordable, ad-supported plan.</p>
        </div>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default Banner;