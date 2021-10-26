import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import CT from './img/ct.jpeg';
import Mike from './img/mike.jpeg';
import Kyle from './img/kyle.jpeg';
import Adi from './img/adi.jpeg';

const Team = () => {
  
  const github = <FontAwesomeIcon style={{color: "white"}} icon={faGithub} />
  const linkedIn = <FontAwesomeIcon style={{color: "white"}} icon={faLinkedin} />

  return (
      <section id="instructors" className="p-5 bg-dark">
        <div className="container">
          <h2 className="text-center text-white">Our Team</h2>
      
          <div id="teamCard" className="row g-4">
            <div >
              <div style={{backgroundColor: "#6D33FF"}} className="card flex-row justify-content-around">
                <div id="profile" className="text-center">
                  <img
                    src={CT}
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
                  <p>
                    CT graduated from Coles College of Business with a Bachelors in Marketing from Kennesaw State University.
                    He previosuly worked in Finance as a Data Analyst for a year before his transition to 
                    the Software Engineering field with a keen enthusiasm for learning new concepts. Now he fully dedicates his 
                    time to learning different languages and frameworks in order to benefit, not only himself, but his team as a whole. 
                    He found his passion for utilizing Front-End frameworks and creative design patterns. And as our seasoned Full-Stack Software Engineer,
                    he has devoted himself to building out our application with clean, DRY, reusable React components. He also serves 
                    as a leader among his peers, seperating and delegating the tasks needed to create and maintain our fully functionally 
                    application. He is a part of a few other open source projects such as LeetKids, Recipe2.0 where he serves as the Front-End Engineer.
                  </p>
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
                    src={Adi}
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
                  <p>Adi graduated from Brooklyn College with a BS in Applied Mathematics. He worked as a Verification Analysit, System Engineer and Software Engineer for large contracts from NASA and The MTA.</p>
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
                    src={Mike}
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
                  <p>Mike graduated with a Bachelor of Arts from the State University of New York at New Paltz and was previously employed in a sales role where he'd work closely with a team of developers to tailor an online advertising product to his clients. Working with developers sparked a curiosity in how he could develop these solutions himself and provoked a career switch to web development. Mike is now looking to build the same kinds of front-end solutions for cthat he was so used to selling in years prior. </p>
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
                    src={Kyle}
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