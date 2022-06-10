import React from 'react';
import "./Footer.css";
import Logo from "./Logo"

function Footer() {
  return (
      <footer>
          <div className="flex">

            <Logo />
            <div className="social">
              <a href="https://github.com/Ganesh-Rathor">
                <i class="fa-brands fa-github fa-xl"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter fa-xl"></i>
              </a>
            <a href="https://www.linkedin.com/in/ganesh-rathor-92388422b/">
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>

            </div>
            <div className="create">
                <p>Copyright@2022#byAashis</p>
                <p>Created by Ganesh Rathor</p>
            </div>
        </div>

      
      </footer>
  )
}

export default Footer