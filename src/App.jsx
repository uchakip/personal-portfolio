import { createRef, useEffect } from 'react';
import './App.css';
import WAVES from 'vanta/src/vanta.waves';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  let vantaRef = createRef();
  useEffect(() => {
    WAVES({
     el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x283037
    });
  }, []);

  return (
    <>

  <div className="bg" id="vanta" ref={vantaRef}></div>
      <div className='app'>
        
          <header>

            <nav class="navbar">

              <img src="logoName.PNG" alt="Logo" className="logo" />
              <ul class="nav-links">


                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>


                <div class="menu" >
                  <li className="hover">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="hover" >
                    <Link to="/aboutme">
                      About Me
                    </Link>
                  </li>

                  <li className="hover">
                    <Link to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="hover">
                    <Link to="/contact">
                      Contact
                    </Link>
                  </li>
                </div>
              </ul>
            </nav>
          </header>
         
          <Outlet />
          <footer className='foot'>
            <p>
              Made with <span className="fa-fa-heart">&#x2665;</span> by Syeda Samra
            </p>
          </footer>
          </div>
          
      



    </>
  )
}

export default App
