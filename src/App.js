import Navbar from './component/navbar'
import Sidebar from './component/sidebar';
import ListGenre from './pages/ListGenre';
import ListMovie from './pages/ListMovie';
import Detail from './pages/detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

   <Router>
     <Navbar />
     <div className="flex">
      <Sidebar />
      <div className="basis-full">
        <Routes>
          <Route  path="/" element={<ListGenre />}/>
          <Route  path="/movie" element={<ListMovie />}/>
          <Route  path="/detail/:id" element={<Detail />}/>
        </Routes>
      </div>
    </div>
   </Router>

  );
}

export default App;
