import React, { useState } from "react";
import homeImage from "../assets/home-page.jpg"; 
import "../styles/home.css"; 

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="home">
      {!isLoggedIn ? (
        <section className="home-container">
          <h1 className="heading">
            Welcome to VisionaryHub - Deliver Your Ideas to the Market
          </h1>

          {/* Horizontal Box Layout */}
          <div className="home-content-box">
            {/* Left Box - About Project */}
            <div className="home-about-box">
              <h2 className="home-about">About This Platform</h2>
              <p className="home-detail1">
                VisionaryHub is a place where entrepreneurs can showcase their startup ideas, get feedback, and find potential investors.
              </p>
              <p className="home-detail2">
                Here, you can explore various startup ideas, contribute your suggestions, and even add your own idea!
              </p>
            </div>

            {/* Right Box - Image */}
            <div className="home-image-box">
              <img src={homeImage} alt="VisionaryHub Home" />
            </div>
          </div>
        </section>
      ) : (
        <section className="startup-ideas">
          <h1>Startup Ideas</h1>
          <p>Explore and engage with innovative startup ideas!</p>
        </section>
      )}
    </div>
  );
}

export default Home;
