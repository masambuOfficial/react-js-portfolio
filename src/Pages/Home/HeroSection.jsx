import React from 'react'

const HeroSection = () => {
  return (
    <section id='heroSection' className='hero--section'>
        <div className='hero--section--content-box'>
            <div className='hero--section--content'>
              <p className='section--title'>Hey, I'am John</p>
              <h1 className='hero--section--title'>
                <span className='hero-section-title--color'>
                  Full Stack {""}
                  <br />
                  Developer
                </span>
              </h1>
              <p className='hero--section-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, eaque neque? Autem?
              </p>
            </div>
            <button className='btn btn--primary btn-outline-primary'>Get In Touch</button>
        </div>
        <div className='hero--section--img'>
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
    </section>
  )
}

export default HeroSection
