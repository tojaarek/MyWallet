import './App.css';
import LoginPage from './pages/AuthPages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/AuthPages/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
    </Routes>
  );
};

export default App;
