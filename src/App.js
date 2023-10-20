import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Appendix from "./Component/Appendix";
import "./styles";
import { ThemeProvider } from "./Component/ThemeContext";
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
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/home" element={<Appendix />} />
              <Route index element={<Appendix />} />
            </Routes>
          </Router>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
