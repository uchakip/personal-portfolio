import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>
      <div className='type'> 
        <p>Hi! This is Syeda Samra</p>
        <p>A Front End Developer</p>
        <p>Embarking on Mern Stack Mastery!</p>
      </div>
      <div className='image-main-container'>
      <div className="image-container">
        <img src="html.png" alt="HTML" />
        <img src="css.png" alt="CSS" />
        <img src="js.png" alt="JavaScript" />
        <img src="bootstrap.png" alt="Bootstrap" />
      </div>
      <div className="image-container">
        <img src="react.png" alt="React" />
        <img src="nodejs.png" alt="Node.js" />
        <img src="git.png" alt="Git" />
        <img src="C++.png" alt="C++" />
      </div>
      </div>
    </>
  );
};

export default Home;
