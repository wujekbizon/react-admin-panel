import './app.scss';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="other">Other pages</div>
      </div>
    </div>
  );
};

export default App;
