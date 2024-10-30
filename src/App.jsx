import React, { useState } from 'react'
import Layout from './components/Layout/Layout'
import { useEffect } from 'react';
import List from './components/List/List';

function App() {
  const [mass, setMass] = useState([]);

  useEffect(() => {
    fetch("/RayanGosling.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setMass(data)
    })
  },[]);
  return (
    <>
    <Layout>
      <List arr={mass}/>
    </Layout>
    </>
  )
}

export default App