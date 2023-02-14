import './App.css';
import api from './api/axiosConfig';
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  const [resources, setResources] = useState([]);

  const getResources = async() => {

    try {

      const response = await api.get("/api/v1/resources");
      console.log(response.data);

      setResources(response.data);

    } catch(err) {
      console.log(err);
    }  
  }

  useEffect(() => {
    getResources();
  }, [])

  return (
    <>
      <div className="App">
        <h1>Developer Hub</h1>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home resources={resources} />} ></Route>
          </Route>
        </Routes>
      

      </div>
    </>
      
  );
}

export default App;
