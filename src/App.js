import { BrowserRouter as Naledi, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './index.css';
import Quotes from './components/quotes';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <Naledi>
      <div>
        <Navigation />
        <div className="home">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </div>
      </div>
    </Naledi>
  );
}

export default App;
