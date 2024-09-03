
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Test from './components/Test/Test';
import Test2 from './components/Test2/Test2';



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
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
