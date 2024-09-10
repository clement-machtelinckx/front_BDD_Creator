
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Table from './components/Table/Table';
import Test2 from './components/Test2/Test2';
import Database from './components/Database/Database';
import SelectedTable from './components/SelectedTable/SelectedTable';
import DeleteTable from './components/Modules/DELETE/DeleteTable';
import DeleteDatabase from './components/Modules/DELETE/DeleteDatabase';



function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/:databaseName" element={<Table />} />
        <Route path="/:databaseName/delete" element={<DeleteDatabase />} />
        <Route path="/:databaseName/:tableName" element={<SelectedTable />} />
        <Route path="/:databaseName/delete/:tableName" element={<DeleteTable />} />
        <Route path="/database" element={<Database />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
