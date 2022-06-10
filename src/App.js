import React,{useState} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Service from "./components/Services/ServicesMain";
import About from "./components/About us/about";
import Contact from "./components/contact/contact";



function App() {
  const [nav, setnav] = useState({
    home:true,
    service:false,
    about:false,
    contact:false
  });

  function navUpdate(e){
    if(e.target.name=== "Home-page"){
      setnav({
        home:true,
      service:false,
      about:false,
      contact:false
      })
        document.title="GaneshOnlineStore"
    }
    else if(e.target.name=== "sevice-page"){
      setnav({
        home:false,
      service:true,
      about:false,
      contact:false
      })

      document.title = "Services"; 
    }
    else if(e.target.name=== "contact-page"){
      setnav({
        home:false,
        service:false,
        about:false,
        contact:true
      })
      document.title ="Contact-Me"; 
    }
    else if(e.target.name=== "about-page"){
      setnav({
        home:false,
      service:false,
      about:true,
      contact:false
      })
      document.title = "About-us"; 

    }
  }

  return (
    <>
      <Navbar  navUpdate={navUpdate} />
      { nav.home ? <Home  navUpdate={navUpdate} /> :null }
      {nav.service ? <Service /> :null}
      {nav.about ? <About />: null }
      { nav.contact ? <Contact />: null}
      <Footer />

    </>
  );
}

export default App;
