import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./styles/app.scss";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
