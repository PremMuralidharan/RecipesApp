import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRecipe from './pages/create-recipe';
import Auth from './pages/auth';
import Home from './pages/home';
import SavedRecipe from './pages/saved-recipe';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipe />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
