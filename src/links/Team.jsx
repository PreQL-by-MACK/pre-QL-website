import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Team = () => {
  
  const github = <FontAwesomeIcon style={{color: "black"}} icon={faGithub} />
  const linkedIn = <FontAwesomeIcon style={{color: "black"}} icon={faLinkedin} />

  return (
      <section id="instructors" className="p-5 bg-dark">
        <div className="container">
          <h2 className="text-center text-white">Our Team</h2>
      
          <div id="teamCard" className="row g-4">
            <div >
              <div style={{backgroundColor: "#6D33FF"}} className="card flex-row justify-content-around">
                <div id="profile" className="text-center">
                  <img
                    src="/img/ct.jpeg"
                    className="rounded-circle mb-3"
                    alt=""
                    width="128"
                    height="128"
                  />
                  <h3 className="card-title mb-3">Connor Tracy</h3>
                  <p className="card-text">
                    Co-founder / Software Engineer
                  </p>
                  <a href="https://www.linkedin.com/in/connortracy19/">
                    {linkedIn}
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="https://github.com/Ctrace12">
                    {github}
                    <i className="bi bi-github text-dark mx-1"></i>
                  </a>
                </div>
                <div className="teamInfo">
                  <p>I was working at a Finance company called NorthPoint Commercial Finance. I landed the
job just before the pandemic hit and was able to maintain the job even though I was a
brand new employee. It was nice but it was not really my passion. I just graduated
college and didn't know where I wanted to be or what I wanted to do. Even though my
company had an internal job board and made it easy to move up, I just wasn't interested
in the opportunities they had to offer. But then I picked up the basic of coding in late April
/ Early May and here I am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="teamCard" className="row g-4">
            <div >
              <div style={{backgroundColor: "#6D33FF"}} className="card flex-row justify-content-around">
                <div id="profile" className="text-center">
                  <img
                    src="/img/adi.jpeg"
                    className="rounded-circle mb-3"
                    alt=""
                    width="128"
                    height="128"
                  />
                  <h3 className="card-title mb-3">Adi Avishalom</h3>
                  <p className="card-text">
                    Co-founder / Software Engineer
                  </p>
                  <a href="https://www.linkedin.com/in/adiavishalom/">
                    {linkedIn}
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="https://github.com/adiavishalom">
                    {github}
                    <i className="bi bi-github text-dark mx-1"></i>
                  </a>
                </div>
                <div className="teamInfo">
                  <p>NA best kat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="teamCard" className="row g-4">
            <div >
              <div style={{backgroundColor: "#6D33FF"}} className="card flex-row justify-content-around">
                <div id="profile" className="text-center">
                  <img
                    src="img/mike.jpeg"
                    className="rounded-circle mb-3"
                    alt=""
                    width="128"
                    height="128"
                  />
                  <h3 className="card-title mb-3">Mike O'Donnell  </h3>
                  <p className="card-text">
                    Co-founder / Software Engineer
                  </p>
                  <a href="https://www.linkedin.com/in/michaelodonnell18/">
                    {linkedIn}
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="https://github.com/michaelodonnell18">
                    {github}
                    <i className="bi bi-github text-dark mx-1"></i>
                  </a>
                </div>
                <div className="teamInfo">
                  <p>I would love to be able to make an industry switch and turn ideas into reality through code. I've heard nothing but great
things about coding from Codesmith grads and am excited to be able to learn a hard-skill that's in such high demand. I'm
hoping to be able to land a job in the field and hopefully be able to start a business or get an idea off the ground using a
combination of aspiration and knowledge of code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="teamCard" className="row g-4">
            <div >
              <div style={{backgroundColor: "#6D33FF"}} className="card flex-row justify-content-around">
                <div id="profile" className="text-center">
                  <img
                    src="/img/ct.jpeg"
                    className="rounded-circle mb-3"
                    alt=""
                    width="128"
                    height="128"
                  />
                  <h3 className="card-title mb-3">Kyle Kim</h3>
                  <p className="card-text">
                    Co-founder / Software Engineer
                  </p>
                  <a href="https://www.linkedin.com/in/kyledkim/">
                    {linkedIn}
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="https://github.com/kyledkim">
                    {github}
                    <i className="bi bi-github text-dark mx-1"></i>
                  </a>
                </div>
                <div className="teamInfo">
                  <p>I graduated from the University of Maryland with a BS in Materials Science and
Engineering. After graduating I worked for a small subcontracting company as a
project manager. After about a year, I then joined a construction management
company working on various projects in the MD area. I then hopped onto a project
out in California for a large tech company doing program management for the past 2.5 years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>  
    </section>
  )
}

export default Team