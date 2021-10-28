import React from 'react'
import preQL1 from './img/preQL1.gif';
import preQL2 from './img/preQL2.gif';
import error from './img/errormessage.png';
import security from './img/securitysettings.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const Docs = () => {
  const whiteIcons = {
    color: "white",
    margin: '5px'
  }

  const blackIcons = {
    color: "black"
  }

  const reactBlue = {
    color: "#61DBFB"
  }
  const preQLPurple = {
    color: "#6D33FF"
  }

  const github = <FontAwesomeIcon style={blackIcons} icon={faGithub} />
  const linkedIn = <FontAwesomeIcon style={blackIcons} icon={faLinkedin} />
  const react = <FontAwesomeIcon style={reactBlue} icon={faReact} />
  const databaseSmall = <FontAwesomeIcon style={reactBlue} icon={faDatabase} />
  const upArrows = <FontAwesomeIcon style={reactBlue} icon={faAngleDoubleUp} />
  const githubWhite = <FontAwesomeIcon style={whiteIcons} icon={faGithub} />
  const linkedInWhite = <FontAwesomeIcon style={whiteIcons} icon={faLinkedin} />

  return (
    <div>
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4" >Documentation</h2>
          <h3>Introduction</h3>
          <p>
            Implementing our app is as simple as ever! On the main page of our website
            you can find the links to download our application. Our app offers support for both Mac and Windows
            users, just make sure you download the right one.
          </p>
          <h3>Mac Users</h3>
          <p>
            MacOS Users: You may need to adjust your security settings to allow the application to run.
          </p>
          <p>
            If you encounter the error below when running the application:
          </p>
          <br></br>
          <div className='gifContainer'>
            <img src={error} />
          </div><br></br>
          <p>
            Go to your security settings and click 'Open Anyway'. You should now be able to use the application as intended.
          </p>
          <br></br>
          <div className='gifContainer'>
            <img src={security} />
          </div><br></br>
          <h3>Navigating and Using</h3>
          <p>
            When you first open the app, you will see an empty box with the word "postgres//" in the center.
            This is where you will copy and paste your database link. Once you click submit, a table will generate
            and show the first table of your database! You can click through to visualize different tables within your database!
          </p>
          <br></br>
          <div className='gifContainer'>
            <img src={preQL1} width='70%' />
          </div><br></br>
          <p>
            Below this visualizer is the core of our application, where you the user can test your SQL Queries
            without pinging your own database over and over again! We added functionality for you to compare two
            different tables in whatever way you please! Below you will see an example of how this works using the famous
            Star Wars API!
          </p>
          <br></br>
          <div className='gifContainer'>
            <img src={preQL2} width='70%' />
          </div><br></br>
          <p>

          </p>
          <h3>Thank you!</h3>
          <p>
            Thank you for using our app! We appreciate your support and look forward to your feedback!
          </p>
        </div>
      </section>


      {/* <!-- Footer --> */}
      <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container" style={{ color: "white" }}>
          <p className="lead">Product developed under tech accelerator, <a href="https://opensourcelabs.io/">OS Labs</a></p>
          <p className="lead"><a href="https://linkedin.com/company/preql/">{linkedInWhite}</a><a href="https://github.com/oslabs-beta/preql">{githubWhite}</a><i className="bi bi-github text-light mx-1" style={{ fontSize: "36px" }}></i></p>
          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <i className="purple bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Docs