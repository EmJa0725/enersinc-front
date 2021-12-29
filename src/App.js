
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AddPerson from './components/AddPerson';
import EditPerson from './components/EditPerson';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agregar-persona" element={<AddPerson />} />
        <Route path="/editar-persona/:id" element={<EditPerson />} />
        <Route
        path="*"
        element={<Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
