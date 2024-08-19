import './App.css';
import LoginPage from './pages/AuthPages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/AuthPages/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import 'react-toastify/dist/ReactToastify.css';
import { RestrictedRoute } from './components/Routes/RestrictedRoute';
import { PrivateRoute } from './components/Routes/PrivateRoute';
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/app" element={<Layout />}>
        <Route
          index
          element={<PrivateRoute redirectTo="/app" component={<MainPage />} />}
        />
      </Route>
      <Route
        path="/"
        element={
          <RestrictedRoute redirectTo="/app" component={<LoginPage />} />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/app" component={<RegisterPage />} />
        }
      />
    </Routes>
  );
};

export default App;
