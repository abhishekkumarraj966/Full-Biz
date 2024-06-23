// SearchBar.jsx
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import http from "../http";

const SearchBar = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cities from the API
    axios.get('https://admin.bizzata.in/api/cities')
      .then(response => {
        const cityOptions = response.data.map(city => ({
          value: city.id,
          label: city.name,
        }));
        setCities(cityOptions);
      })
      .catch(error => {
        console.error('There was an error fetching the cities!', error);
      });
  }, []);

  const handleSearch = () => {
    // Submit the search request
    const cityId = selectedCity ? selectedCity.value : '';
    axios.get(`https://admin.bizzata.in/api/search/${cityId}`, { params: { search: searchQuery } })
      .then(response => {
        // Navigate to the SearchPage with search results
        navigate('/search', { state: { results: response.data } });
      })
      .catch(error => {
        console.error('There was an error with the search!', error);
      });
  };

  return (
    <>
    
<h1 class="mb-4 mt-20 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-600 md:text-5xl lg:text-6xl">Search for <span class="text-red-600">Business</span></h1>

<div className="flex flex-nowrap items-center overflow-hidden h-20 w-fit max-w-4xl mx-8 md:mx-auto mt-10 mb-20 bg-gray-500 rounded-lg ">
  <div className="w-full p-0 m-0 nowrap">
    <Select
      options={cities}
      value={selectedCity}
      onChange={setSelectedCity}
      placeholder="Select a city"
      className="w-full cursor-text"
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: 'gray-600',
          border: 'none',
          boxShadow: 'none',
        }),
        placeholder: (base) => ({
          ...base,
          color: 'white',
        }),
        input: (base) => ({
          ...base,
          color: 'white',  // Text color while typing
        }),
        singleValue: (base) => ({
          ...base,
          color: 'white',  // Selected text color
        }),
      }}
    />
  </div>
  <div className="flex-grow w-full m-0">
    <input
      type="text"
      className="w-full px-4 py-2 bg-transparent text-white placeholder-white outline-none"
      placeholder="Search query"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
  <button
    onClick={handleSearch}
    className="w-fit bg-red-600 text-white px-4 py-2 hover:bg-red-700 rounded-r-lg transition-colors m-0"
  >
    Search
  </button>
</div>


    </>
  );
};

export default SearchBar;
