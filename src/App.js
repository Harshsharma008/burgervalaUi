import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./styles/app.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"
import Home from "./components/home/Home";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
