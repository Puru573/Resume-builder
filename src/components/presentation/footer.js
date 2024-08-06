import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (  
  
  <footer className="footer">  
      <div>made by Puru pal</div>
    <div style={{marginTop:'2rem'}}>
    <Link to="https://github.com/Puru573"><img src="https://img.icons8.com/material-outlined/50/000000/github.png"/></Link>
    <Link to="https://www.linkedin.com/in/puru-pal-407a191a6/"><img src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png"/></Link>
    <Link to="mailto:purukumar.p@gmail.com"><img src="https://img.icons8.com/material-rounded/48/000000/gmail-login.png"/></Link>
    </div>
  </footer>

  );
};
export default footer;
