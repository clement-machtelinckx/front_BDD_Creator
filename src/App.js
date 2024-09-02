
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Test from './components/Test/Test';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <p>My first React app!</p>
      </header>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
