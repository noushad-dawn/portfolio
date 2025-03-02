import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import Projects from "./components/Projects";
import './App.css'
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe"
import Footer from './components/Footer';

import TechShowcase from "./components/TechTools";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ProfileSection/>
    <AboutMe/>
    <Projects/>
    <TechShowcase/>
    <ContactMe/>
    <Footer/>

    </div>
  );
}

export default App;
