import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Foother";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact  from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar></Navbar>
         
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/Menu' element={<Menu></Menu>} ></Route>
          <Route path='/About' element={<About></About>} ></Route>
          <Route path='/Contact' element={<Contact></Contact>} ></Route>
        </Routes>
     


      <Footer></Footer>
    </div>
  );
}

export default App;
