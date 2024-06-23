import React, { useEffect } from "react";
import BannerSlider from "./BannerSlider";
import TopBusinesses from "./TopBusinesses";
import Shopymart from "./Shopymart";
import Shoopmartgivyou from "./Shoopmartgivyou";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Feedback from "./Feedback";
import GetTouch from "./GetTouch";
import Recentblg from "./Recentblg";
import { useLocation } from "react-router-dom";
import HomCategory from "./HomCategory";
import SEO from "./SEO/SEO";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Gobutton from "./Pages/Gobutton";
import Footer from "./Footer";
const Fredany = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="bg-[#FFF]">
      {/* SEO Start */}
      <SEO
        title="Bizzata"
        name="Your Bizzata"
        type="Home"
        keyword=" BIZZATA, local search, travel, grocery, medicines, hotels, events, search plus services, local businesses, online yellow pages, Digital Marketing Agency in indore, India trade directory, city yellow pages, indian search engine, BIZZATA."
        description="BIZZATA, India s No 1 Business search engine, for unisex salon, resturant, interior designer, spa, coaching classes, furniture , computer and laptop, home decore, building material , hardware store, Restaurants, Hotels, Salons, Real Estate, Travel, Healthcare, Education, B2B Businesses and more Find addresses, phone numbers, reviews and ratings, photos, maps of businesses.
"
      />
    {/* SEO End */}

    {/* HOme page components starts  */}
    <Navbar />
    <SearchBar/>
      <BannerSlider />
      <TopBusinesses />
      <Shopymart />
      <Shoopmartgivyou />
      <HomCategory />
      <HowItWorks id="howItWorks" />
      <Pricing id="pricing" />
      <Feedback />
      <Recentblg />
      <GetTouch />
      <Gobutton />
      <Footer />
    </div>
  );
};

export default Fredany;
