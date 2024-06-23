import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AppLayout from "./AppLayout";
const sliceParagraph = (paragraph, wordCount) => {
  return paragraph.split(" ").slice(0, wordCount).join(" ") + (paragraph.split(" ").length > wordCount ? "..." : "");
};
const Category = () => {
  const { category_id, category_name } = useParams(); // Get params from URL

  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    if (category_id && category_name) {
      axios
        .get(`https://admin.bizzata.in/api/category/${category_id}/businesses`)
        .then((response) => {
          setBusinesses(response.data);
        })
        .catch((error) => {
          console.error("Error fetching businesses:", error);
        });
    }
  }, [category_id, category_name]);

  // Handle case where category_id or category_name is null or undefined
  if (!category_id || !category_name) {
    return (
      <div className="my-2 mb-8">
        <AppLayout>
          <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
            Category Not Found
          </h1>
          <p className="text-center">Category details not provided.</p>
        </AppLayout>
      </div>
    );
  }

  return (
    <div className="my-2 mb-8">
      <AppLayout>
        <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
          Businesses in {category_name}
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {businesses.map((business) => (
            <div key={business.id} className="border border-gray-200 p-4 rounded-md">
              <img
                src={'https://admin.bizzata.in/storage/' + business.profile}
                alt={business.business_name}
                className="h-40 w-40  object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{business.business_name}</h2>
              <p className="text-gray-600 mb-2">{sliceParagraph(business.description,10)}</p>
              <p className="text-gray-600">Location: {business.city?.name}</p>
              <p className="text-gray-600">Address: {business.address}</p>
            </div>
          ))}
        </div>
      </AppLayout>
    </div>
  );
};

export default Category;
