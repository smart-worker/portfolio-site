import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/LandingPage";
import Header from "./components/Header/Header";
import Preloader from "./components/Loader/Preloader";
import Cursor from "./components/Cursor/Cursor";
import Chatbot from "./components/Chatbot/index";

const App = () => {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const eduRef = useRef(null);
  const projectRef = useRef(null);

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App">
        <Chatbot />
        <Cursor />
        <Header
          homeRef={homeRef}
          workRef={workRef}
          eduRef={eduRef}
          projectRef={projectRef}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                homeRef={homeRef}
                workRef={workRef}
                eduRef={eduRef}
                projectRef={projectRef}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer homeRef={homeRef} />
      </div>
    </Router>
  );
};

export default App;
