import Navbar from './component/navbar'
import Sidebar from './component/sidebar';
import ListGenre from './pages/ListGenre';
import ListMovie from './pages/ListMovie';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (

   <div>
     <Navbar />
     <div className="flex">
     <Sidebar />
     <div className="basis-full">
        {/* <ListGenre /> */}
        <ListMovie />
   </div>
    </div>
   </div>

  );
}

export default App;
