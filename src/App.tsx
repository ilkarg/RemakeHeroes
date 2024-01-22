import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequestStore } from './stores/RequestStore';
import './App.sass';
import { Home } from './modules/home/pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
