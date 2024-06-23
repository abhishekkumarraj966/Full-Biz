import "./App.css";

import Layout from "./Components/Layout";

import Aboutus from "./Components/Pages/Aboutus";
import Contactus from "./Components/Pages/Contactus";
import Affilatepg from "./Components/Pages/Affilatepg";
import Careers from "./Components/Pages/Careers";
import SearchPage from "./Components/SearchPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonials from "./Components/Pages/Testimonials";
import Faq from "./Components/Pages/Faq";
import Privacypolicy from "./Components/Pages/Privacypolicy";
import Returnsrefunds from "./Components/Pages/Returnsrefunds";
import Cookieguidelines from "./Components/Pages/Cookieguidelines";
import Termsconditions from "./Components/Pages/Termsconditions";
import Blogspg from "./Components/Pages/Blogspg";
import Login from "./Components/Pages/Login";
import Signeup from "./Components/Pages/Signeup";
import HowItWorks from "./Components/HowItWorks";
// import Pricing from "./Components/Pricing";
import Nextsigneup from "./Components/Pages/Nextsigneup";

import Category from "./Components/Category";
import DocumentTitleHandler from "./Components/DocumentTitleHandler";
import { HelmetProvider } from "react-helmet-async";
import BannerSlider from "./Components/BannerSlider";
import BusinessDetails from "./Components/BusinessDetails";
import Blogespag from "../src/Templates/Fredany-main/Blogespag";
import Probuctpage from "../src/Templates/Fredany-main/Probuctpage";
import AllCategories from "./Components/AllCategories";

function App() {
  return (
    <div>
      <HelmetProvider>
        <BrowserRouter>
   
        <DocumentTitleHandler />
          <Routes>
          <Route path="/:city/:slug/blogespag" element={<Blogespag />} />
          <Route path="/:city/:slug/productpage" element={<Probuctpage/>} />
            <Route path="/" exact component={BannerSlider} element={<Layout />} />
            <Route path="/:city/:slug/" exact element={<BusinessDetails />} />
           
            <Route path="/contactus" exact element={<Contactus />} />
            <Route path="/aboutus" exact element={<Aboutus />} />

            <Route path="/affilatepg" exact element={<Affilatepg />} />
            <Route path="/careers" exact element={<Careers />} />
            <Route path="/testimonials" exact element={<Testimonials />} />

            <Route path="/faq" exact element={<Faq />} />
            <Route path="/privacypolicy" exact element={<Privacypolicy />} />
            <Route path="/returnsrefunds" exact element={<Returnsrefunds />} />
            <Route
              path="/cookieguidelines"
              exact
              element={<Cookieguidelines />}
            />
            <Route
              path="/termsconditions"
              exact
              element={<Termsconditions />}
            />
            <Route path="/blogpg/:id" exact element={<Blogspg />} />

            <Route path="/login" exact element={<Login />} />
            <Route path="/signeup" exact element={<Signeup />} />

            {/* <Route path="/pricing" exact element={<Pricing/>} /> */}
            <Route path="/howItWorks" exact element={<HowItWorks />} />
            <Route path="/nextsigneup" exact element={<Nextsigneup />} />
            {/* <Route path="/" element={<SearchBar />} /> */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/category" element={<AllCategories />} />
            <Route path="/category/:category_id/:category_name" element={<Category />}  />
          </Routes>
        
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
