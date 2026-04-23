import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Directory from './pages/Directory';
import FacultyProfile from './pages/FacultyProfile';
import Departments from './pages/Departments';
import CampusMap from './pages/CampusMap';
import Schedules from './pages/Schedules';
import FAQ from './pages/FAQ';
import Events from './pages/Events';
import LostAndFound from './pages/LostAndFound';
import Login from './pages/Login';
import Clubs from './pages/Clubs';
import { useAuth } from './context/AuthContext';

const ProtectedRoutes = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<Home />} />
            <Route path="directory" element={<Directory />} />
            <Route path="directory/:id" element={<FacultyProfile />} />
            <Route path="departments" element={<Departments />} />
            <Route path="campus-map" element={<CampusMap />} />
            <Route path="events" element={<Events />} />
            <Route path="clubs" element={<Clubs />} />
            <Route path="lost-and-found" element={<LostAndFound />} />
            <Route path="schedules" element={<Schedules />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
