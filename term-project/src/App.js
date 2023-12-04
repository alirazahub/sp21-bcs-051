import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './layout/AdminDashboard';
import StudentList from './pages/StudentList';
import DocumentLibrary from './pages/DocumentLibrary/DocumentLibrary';
import Record from './pages/StudentRecord/Record';
import EnrollmentDocuments from './pages/StudentRecord/EnrollmentDocuments';
import CampusContent from './pages/CampusContent/CampusContent';
import MainDashbord from './pages/EnrollmentJourny/MainDashbord';
import Users from './pages/Users';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Genres from './pages/Genres';
import Cast from './pages/Cast';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
          <Route index element={<MainDashbord />} />
          <Route path="dashboard" element={<MainDashbord />} />
          <Route path="users" element={<Users />} />
          <Route path="movies" element={<Movies />} />
          <Route path="cast" element={<Cast />} />
          <Route path="tv-shows" element={<TvShows />} />
          <Route path="genres" element={<Genres />} />
          <Route path="document-library" element={<DocumentLibrary />} />
          <Route path="users" element={<DocumentLibrary />} />
          <Route path="student-list" element={<StudentList />} />
          <Route path="enrollment-document" element={<EnrollmentDocuments />} />
          <Route path="campus-content" element={<CampusContent />} />
          <Route path="student-record" element={<Record />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
