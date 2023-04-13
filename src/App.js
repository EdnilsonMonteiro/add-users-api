import React, { useState } from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import Layout from './components/Layout';
import ShowCard from './components/ShowCard';
import AddNew from './components/AddNew';
import ShowModal from './components/ShowModal';


function App() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
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
            selectedUser={selectedUser} setSelectedUser={setSelectedUser}
            users={users} setUsers={setUsers}
            isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  
            loadCards={loadCards} 
          /> 
        </Row>

        
        {isModalOpen && 
        <ShowModal 
          selectedUser={selectedUser} setSelectedUser={setSelectedUser}
          users={users} setUsers={setUsers}
          setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} 
          onClose={handleCloseModal} 
        /> }
        
      </div>
    </Layout>
  );
}

export default App;
