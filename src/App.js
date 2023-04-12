import logo from './logo.svg';
import './App.css';
import { Row } from 'react-bootstrap';
import Layout from './components/Layout';
import ShowCard from './components/ShowCard';


function App() {
  return (
    <Layout>
      <div className="App">
        <Row> <ShowCard /> </Row>
        
      </div>
    </Layout>
  );
}

export default App;
