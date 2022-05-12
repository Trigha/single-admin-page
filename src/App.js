import Navbar from './component/navbar'
import Sidebar from './component/sidebar';
import ListGenre from './pages/ListGenre';
import ListMovie from './pages/ListMovie';
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
            {/* <ListGenre /> */}
          {/* </Route> */}
          <Route  path="/movie" element={<ListMovie />}/>
            {/* <ListMovie /> */}
          {/* </Route> */}

        </Routes>
      </div>
    </div>
   </Router>

  );
}

export default App;
