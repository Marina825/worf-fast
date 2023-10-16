import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./style/reset.scss";
import "./style/normalize.scss";
import "./style/style-App.scss";
import "./style/style-Header.scss";
import "./style/style-Main.scss";
import "./style/style-Section.scss";
import "./style/theme-switch.scss";
import Appendix from "./Component/Appendix";
import { About } from "./Component/About";
import "./style/style-Footer.scss";
import { DotSpinner } from "@uiball/loaders";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="loading-container">
          <DotSpinner size={40} speed={0.9} color="#181818" />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/home" element={<Appendix />} />
            <Route index element={<Appendix />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
