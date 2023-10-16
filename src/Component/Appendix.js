import React, { useState } from "react";
import Main from "./Main";
import Section from "./Section";
import Footer from "./Footer";
import Header from "./Header";

const Appendix = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
  
    const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };
    return (
       <div>
          <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <Main isDarkTheme={isDarkTheme} />
          <Section isDarkTheme={isDarkTheme}/>
          <Footer isDarkTheme={isDarkTheme} />
          </div>
      );


}
export default Appendix;
