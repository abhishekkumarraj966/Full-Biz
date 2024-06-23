import React from "react";
import Navbar from "./Navbar";
import CompanyInfoBox from "./CompanyInfoBox";
import ServiceBox from "./ServiceBox";
import ProductCard from "./ProductCard";
import Blogs from "./Blogs";
import Gallery from "./Gallery";
import BussinessHours from "./BussinessHours";
import EnquiryForm from "./EnquiryForm";
import Appoinment from "./Appoinment";
import Service from "./Service";
import Feedbackform from "./Feedbackform";
import Review from "./Review";
import Certificates from "./Certificates";
import Offer from "./Offer";

import { BusinessProvider } from "../../context/BusinessContext";

function Fredany({ business }) {
  if (!business) {
    return <div>Loading...</div>;
  }

  return (
    <BusinessProvider business={business}>
      <Navbar   />
      <CompanyInfoBox  business={business}/>
      <ServiceBox business={business} />
      <ProductCard business={business} />
      <Service business={business}/>
      <Offer business={business}/>
      <Blogs business={business}/>

      <Gallery business={business}/>
      <BussinessHours business={business} />
      <Certificates business={business}/>

      <Feedbackform business={business}/>
      <Review business={business}/>

      <Appoinment business={business}/>
      <EnquiryForm business={business}/>
      </BusinessProvider>
    
  );
};

export default Fredany;
