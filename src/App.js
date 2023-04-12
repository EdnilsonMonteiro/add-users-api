import logo from './logo.svg';
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Row } from 'react-bootstrap';
import Layout from './components/Layout';
import ShowCard from './components/ShowCard';
import AddNew from './components/AddNew';
import ShowModal from './components/ShowModal';

function App() {

  const [results, setResults] = useState(3) //Estado que mostra quantos users aparecerão
  const [loadCards, setLoadCards] = useState(false)

  return (
    <Layout>
      <div className="App">
        <AddNew loadCards={loadCards} setLoadCards={setLoadCards} results={results} setResults={setResults}/>
        <Row> 
          <ShowCard loadCards={loadCards} results={results} /> 
        </Row>

        <ShowModal />
        
      </div>
    </Layout>
  );
}

export default App;
