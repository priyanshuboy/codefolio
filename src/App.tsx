import './App.css';
import Header from './component/header/header';
import Home from './component/Home/Home';
import Skill from './component/Skills/Skills';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animations in ms
      once: false     // animate every time on scroll
    });
  }, []);

  return (
    <>
      
    <div className=" bg-[#282828] w-screen min-h-screen overflow-x-hidden">
      {/* ❄️ Snowfall 3D background */}
    

      {/* 🔼 App content */}
      <div data-aos="fade-up" className="relative z-10 text-white text-2xl">
        
        <Header />
        <hr className="border-t border-[#383838] my-4" />
        <Home />
        <Skill />
      </div>
    </div>
</>  );
}

export default App;
