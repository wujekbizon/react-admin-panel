import './app.scss';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
