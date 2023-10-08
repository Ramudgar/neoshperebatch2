import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarComponenet from "./components/navbarComponenet";
import FooterComponent from "./components/footerComponent";
import HomeComponent from "./components/homeComponent";
import AboutComponent from "./components/aboutComponent";
import SignupComponent from "./components/signupComponent";
import SigninComponent from "./components/signinComponent";

function App() {
  return (
    <Router>
      <NavbarComponenet />
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/about" element={<AboutComponent />}></Route>
        <Route path="/singup" element={<SignupComponent />}></Route>
        <Route path="/signin" element={<SigninComponent />}></Route>
      </Routes>

      <FooterComponent />
    </Router>
  );
}

export default App;
