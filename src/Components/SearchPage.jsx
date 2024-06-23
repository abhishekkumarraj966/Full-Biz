import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import createSlug from './createSlug';
import Navbar from './Navbar'
import Footer from './Footer'
import AppLayout from './AppLayout'
const SearchPage = () => {



  const location = useLocation();
  const { results } = location.state || {};

  return (

      <div>
        
      <Navbar/>
      <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <div className='grid grid-cols-3'> 
      {results && results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <div key={index} className="business-card flex flex-col items-center rounded-lg shadow-md bg-gray-100 p-4">
              <img src={'https://admin.bizzata.in/storage/' + result.profile} alt="Profile Image" className="w-20 rounded-full object-cover mb-4" />

                 <Link to={`/${createSlug(result.city.name)}/${result.slug}`} target="_blank" className="hover:text-blue-500"><h2 className="text-xl font-bold text-gray-800">{result.business_name}</h2>  </Link>
              <p className="text-base text-gray-600">{result.address}
                Location: {result.city?.name || 'No City'}</p>
              <div className="flex mt-4 justify-center space-x-4 text-gray-600">
                <a href="#" className="hover:text-blue-500">
                  {/* <FontAwesomeIcon icon={faPhone} /> */}
                </a>
                <a href='#' className="hover:text-blue-500">
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                </a>
             
                  {/* <FontAwesomeIcon icon={faGlobe} /> */}
              
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
    </div>
      <Footer/>

     </div>
    
  );
};

export default SearchPage;
