import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import githubIcon from "./assets/github-icon.svg";
import linkedinIcon from "./assets/linkedin-icon.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1 className="title">
            Rishi Raman, <br /> BS/MS student at{" "}
            <span className="school">Georgia Tech</span>
          </h1>
          <nav className="navbar">
            <div className="navbar-left">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
              <NavLink
                to="/education"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Education
              </NavLink>
              <NavLink
                to="/experience"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Experience
              </NavLink>
            </div>
            <div className="navbar-right">
              <a
                href="https://github.com/r15h1raman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishir03/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="Linkedin" className="icon" />
              </a>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
