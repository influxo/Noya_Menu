import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // assuming Home component is in Home.tsx
import Menu from './pages/Menu';

function App() {
 

  return(
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/menu"
          element={<Menu />}
        />
      </Routes>
    </Router>
  );
}

export default App;
