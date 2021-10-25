import React from 'react'

const MainPage = () => {
  return(
    <div className="body-div">

      <section
        className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
      >
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1><span className="purple">Visualize </span>your<span className="purple"> PostgreSQL </span>database.</h1>
              <p className="lead my-4">
                PreQL is an interactive PostgreSQL visualization tool that provides developers with the ability to easily visualize their databases with cached, queryless requests to the backend and automatically generate SQL queries.
              </p>
              <button
                className="btn white purple-background btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Download for macOS
              </button>
              <button
                className="btn white purple-background btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Download for Windows
              </button>
            </div>
            <img
              className="filter-preql img-fluid w-50 d-none d-sm-block"
              src="img/database.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-laptop"></i>
                </div>
                <h3 className="card-title mb-3">Interactive</h3>
                <p className="card-text">
                  Interactive and easy to use GUI.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-secondary text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-stack"></i>
                </div>
                <h3 className="card-title mb-3">Queryless</h3>
                <p className="card-text">
                  Cached table transformations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-arrow-repeat"></i>
                </div>
                <h3 className="card-title mb-3">Automatic</h3>
                <p className="card-text">
                  Automatic SQL query generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- FAQ --> */}
    <section id="questions" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="questions">
          {/* <!-- Item 1 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                Question 1?
              </button>
            </h2>
            <div
              id="question-one"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          {/* <!-- Item 2 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                Question 2?
              </button>
            </h2>
            <div
              id="question-two"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          {/* <!-- Item 3 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                Question 3?
              </button>
            </h2>
            <div
              id="question-three"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          {/* <!-- Item 4 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
              >
                Question 4?
              </button>
            </h2>
            <div
              id="question-four"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
          {/* <!-- Item 5 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-five"
              >
                Question 5?
              </button>
            </h2>
            <div
              id="question-five"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                beatae fuga animi distinctio perspiciatis adipisci velit maiores
                totam tempora accusamus modi explicabo accusantium consequatur,
                praesentium rem quisquam molestias at quos vero. Officiis ad
                velit doloremque at. Dignissimos praesentium necessitatibus
                natus corrupti cum consequatur aliquam! Minima molestias iure
                quam distinctio velit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="instructors" className="p-5 purple-background">
      <div className="container">
        <h2 className="text-center text-white">Our Team</h2>
    
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="img/ct.jpeg"
                  className="rounded-circle mb-3"
                  alt=""
                  width="128"
                  height="128"
                />
                <h3 className="card-title mb-3">Connor Tracy</h3>
                <p className="card-text">
                  Co-founder / Software Engineer
                </p>
                <a href="https://www.linkedin.com/in/connortracy19/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="https://github.com/Ctrace12"><i className="bi bi-github text-dark mx-1"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="img/adi.jpeg"
                  className="rounded-circle mb-3"
                  alt=""
                  width="128"
                  height="128"
                />
                <h3 className="card-title mb-3">Adi Avishalom</h3>
                <p className="card-text">
                  Co-founder / Software Engineer
                </p>
                <a href="https://www.linkedin.com/in/adiavishalom/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="https://github.com/adiavishalom"><i className="bi bi-github text-dark mx-1"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="img/mike.jpeg"
                  className="rounded-circle mb-3"
                  alt=""
                  width="128"
                  height="128"
                />
                <h3 className="card-title mb-3">Mike O'Donnell</h3>
                <p className="card-text">
                  Co-founder / Software Engineer
                </p>
                <a href="https://www.linkedin.com/in/michaelodonnell18/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="https://github.com/michaelodonnell18"><i className="bi bi-github text-dark mx-1"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="img/kyle.jpeg"
                  className="rounded-circle mb-3"
                  alt=""
                  width="128"
                  height="128"
                />
                <h3 className="card-title mb-3">Kyle Kim</h3>
                <p className="card-text">
                  Co-founder / Software Engineer
                </p>
                <a href="https://www.linkedin.com/in/kyledkim/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="https://github.com/kyledkim"><i className="bi bi-github text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Footer --> */}
    <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <p className="lead">Product developed under tech accelerator, <a href="https://opensourcelabs.io/">OS Labs</a></p>
        <p className="lead"><a href="https://github.com/oslabs-beta/preql"><i className="bi bi-github text-light mx-1" style={{fontSize:"36px"}}></i></a></p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <i className="purple bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossOrigin="anonymous"
    ></script>

  </div>
  )
}

export default MainPage