import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarComponenet from "./components/navbarComponenet";
import FooterComponent from "./components/footerComponent";
import HomeComponent from "./components/homeComponent";
import AboutComponent from "./components/aboutComponent";

function App() {
  return (
    <Router>
      <NavbarComponenet />
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/about" element={<AboutComponent />}></Route>
      </Routes>

      <FooterComponent />
    </Router>
  );
}

export default App;
