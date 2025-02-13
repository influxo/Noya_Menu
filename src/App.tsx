import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // assuming Home component is in Home.tsx
import Menu from './pages/Menu';
import SingleCategory from './pages/SingleCategory';

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
        <Route 
          path="/menu/:slug"
          element={<SingleCategory />}
        />
      </Routes>
    </Router>
  );
}

export default App;
