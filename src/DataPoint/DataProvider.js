// data/DataProvider.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context for data
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your Python server endpoint
    axios.get('http://localhost:7500/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data
export const useData = () => useContext(DataContext);
