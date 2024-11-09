"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I am  {" "}</span>
            <br />
            <TypeAnimation
              sequence={[
                'Arjumand Afreen',
                1000,
                'Web Developer',
                1000,
                'TypeScript Developer',
                1000,
                'Brillient Student',
                1000
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="hero-animation"
            />
          </h1>
          <p className="hero-description">
              I am a full stack web developer with a passion for building dynamic, 
              user-friendly websites and applications. With expertise in both front-end 
              and back-end technologies, I enjoy creating seamless digital experiences 
              that are both visually appealing and highly functional. My skills include 
              HTML, CSS, JavaScript, TypeScript, React, Next.js, and various back-end 
              frameworks. I am always eager to learn new technologies.
          </p>
          <div className="hero-buttons">
            <button className="btn-contact">Contact</button>
            <button className="btn-hire-me">
              <span className="hire-me-span">Hire Me</span>
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <Image
              src="/images/profile pic.png"
              alt="Hero Section Image"
              width={800}
              height={800}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;