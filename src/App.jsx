import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, ProductDetail, Shooping } from './pages';
import { LoadingScreen, NavBar, ProtectedRoutes } from './components';
import { useSelector } from 'react-redux/es/exports';
import './App.css';

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/shooping" element={<Shooping />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
