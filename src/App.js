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

  const [loadCards, setLoadCards] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false); // Função para fechar o modal
  };

  return (
    <Layout>
      <div className="App">
        <AddNew 
          loadCards={loadCards} setLoadCards={setLoadCards} 
        />
        <Row> 
          <ShowCard 
            isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  
            loadCards={loadCards} 
          /> 
        </Row>

        
        {isModalOpen && 
        <ShowModal 
          setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} 
          onClose={handleCloseModal} 
        /> }
        
      </div>
    </Layout>
  );
}

export default App;
