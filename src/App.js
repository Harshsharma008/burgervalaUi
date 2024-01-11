import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./styles/app.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact"
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/home.scss";
import "./styles/contact.scss";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
