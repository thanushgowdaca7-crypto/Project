import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Directory from './pages/Directory';
import FacultyProfile from './pages/FacultyProfile';
import Departments from './pages/Departments';
import CampusMap from './pages/CampusMap';
import Schedules from './pages/Schedules';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="directory" element={<Directory />} />
          <Route path="directory/:id" element={<FacultyProfile />} />
          <Route path="departments" element={<Departments />} />
          <Route path="campus-map" element={<CampusMap />} />
          <Route path="schedules" element={<Schedules />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
