import React, { createContext, useContext } from 'react';

const BusinessContext = createContext();

export const useBusiness = () => useContext(BusinessContext);

export const BusinessProvider = ({ business, children }) => (
  <BusinessContext.Provider value={business}>
    {children}
  </BusinessContext.Provider>
);
