import logo from './logo.svg';
import './App.css';
import { Row } from 'react-bootstrap';
import Layout from './components/Layout';
import ShowCard from './components/ShowCard';
import AddNew from './components/AddNew'


function App() {
  return (
    <Layout>
      <div className="App">
        <AddNew />
        <Row> <ShowCard /> </Row>
        
      </div>
    </Layout>
  );
}

export default App;
