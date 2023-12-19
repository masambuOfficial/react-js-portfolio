import React from 'react'

const AboutMe = () => {
  return (
    <section id='AboutMe' className='about--section' >
      <div className='about--section--img'>
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className='hero--section--content--box about--section--box'>
        <div className='hero--section--content'>
            <p className='section--title'>About</p>
            <h1 className='skills-section--heading'>About Me</h1>
            <p className='hero--section--description'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum eos tempora, voluptatum esse quia omnis in laborum exercitationem. Consectetur excepturi animi maiores officia fugiat laborum asperiores! Praesentium, ab. Animi.
            </p>
            <p className='hero--section--description'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum eos tempora, voluptatum esse quia omnis in laborum exercitationem. 
            </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

