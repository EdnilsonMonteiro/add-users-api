import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import Layout from './components/Layout';
import ShowCard from './components/ShowCard';
import AddNew from './components/AddNew'


function App() {

  const [results, setResults] = useState(3) //Estado que mostra quantos users aparecerão

  return (
    <Layout>
      <div className="App">
        <AddNew results={results} setResults={setResults}/>
        <Row> 
          <ShowCard results={results} /> 
        </Row>
        
      </div>
    </Layout>
  );
}

export default App;
