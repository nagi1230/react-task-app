import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen, "menuOpenmenuOpen");

  return (
    <>
      <header className="nt-headerwrap">
        <div className="container">
          {/* Logo */}
          <div className="nt-logo">
            <a href="/" title="Injala">
              <img
                src="https://www.injala.com/images/logo.svg"
                alt="Injala Logo"
              />
            </a>
          </div>

          {/* Hamburger button (only visible on mobile) */}
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

          <nav className={`nt-menu ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <ul>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>

        </div>


      </header>
      <section className="section-one">
        <div className="front-end-banner">
          <div className="banner-heading"><h1>Front End Engineer</h1></div>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <div className="card">
            <div className="card__header">
              <span className="card__current-opening">
                <span className="card__symbol">&#8592;</span> Current Opening
              </span>
              <div className="card__title-row">
                <h3>Front-end Engineer</h3>
                <button className="card__button">Apply Now</button>
              </div>
              <p className="card__details">
                Remote-end <span> |  </span>Full Time
              </p>
            </div>
          </div>
        </div>
        <div className="website-content">
          <div className="titel">
            <h1>About the Company:</h1>
            <ul>
              <li>
                We strive for a work environment that challenges creativity and helps advance its employees’ careers; friendly, safe and diverse with a family like atmosphere that supports professional and personal growth within and outside the company.
              </li>

            </ul>
          </div>

          <div className="titel">
            <h1>Job Role:</h1>
            <ul>
              <li>We are an enterprise software, product-based, multi-national Company (MNC). We are a leading disruptor in the insurance industry; providing software technology solutions that are creating a transformational evolution in risk management.
                We strive for a work environment that challenges creativity and helps advance its employees’ careers; friendly, safe and diverse with a family like atmosphere that supports professional and personal growth within and outside the company.
                We are a group of like-minded people who want to create technology that inspires not only an industry, but an entire generation to think beyond today, to the possibilities of the future.
                Headquartered in Dallas, USA with offices in India.
                30+% growth for the last 5 years, every year.</li>
            </ul>
          </div>


          <div className="titel">
            <h1>Job Responsibilities:</h1>
            <ul>
              <li>We are an enterprise software, product-based, multi-national Company (MNC). We are a leading disruptor in the insurance industry; providing software technology solutions that are creating a transformational evolution in risk management.
                We strive for a work environment that challenges creativity and helps advance its employees’ careers; friendly, safe and diverse with a family like atmosphere that supports professional and personal growth within and outside the company.
                We are a group of like-minded people who want to create technology that inspires not only an industry, but an entire generation to think beyond today, to the possibilities of the future.
                Headquartered in Dallas, USA with offices in India.
                30+% growth for the last 5 years, every year.</li>
            </ul>
          </div>


          <div className="titel">
            <h1>Required Skills and Experience:</h1>
            <ul>
              <li>We are an enterprise software, product-based, multi-national Company (MNC). We are a leading disruptor in the insurance industry; providing software technology solutions that are creating a transformational evolution in risk management.
                We strive for a work environment that challenges creativity and helps advance its employees’ careers; friendly, safe and diverse with a family like atmosphere that supports professional and personal growth within and outside the company.
                We are a group of like-minded people who want to create technology that inspires not only an industry, but an entire generation to think beyond today, to the possibilities of the future.
                Headquartered in Dallas, USA with offices in India.
                30+% growth for the last 5 years, every year.</li>
            </ul>
          </div>


          <div className="titel">
            <h1>Personal Attributes:</h1>
            <ul>
              <li>We are an enterprise software, product-based, multi-national Company (MNC). We are a leading disruptor in the insurance industry; providing software technology solutions that are creating a transformational evolution in risk management.
                We strive for a work environment that challenges creativity and helps advance its employees’ careers; friendly, safe and diverse with a family like atmosphere that supports professional and personal growth within and outside the company.
                We are a group of like-minded people who want to create technology that inspires not only an industry, but an entire generation to think beyond today, to the possibilities of the future.
                Headquartered in Dallas, USA with offices in India.
                30+% growth for the last 5 years, every year.</li>
            </ul>
          </div>
          <div className="titel">
            <h1>Benefits:</h1>
            <ul className="">
              <li>Open Door working Culture.</li>
              ssss
              <li>Early Joining Benefit.</li>
              <li>Internal Growth opportunities.</li>
              <li>Rewards &amp; Recognitions.</li>
              <li>Events &amp; Festival Celebration.</li>
              <li>Very good Referral Bonus.</li>
              <li>Flex time policy.</li>
              <li>Maternity Leave benefit.</li>
              <li>No Sandwich Leave Policy.</li>
              <li>Family Medical Insurance.</li>
            </ul>
          </div>
        </div>
        <div className="input-card">
          <h1>Apply for this job by filling below form.</h1>
          <div className="form-container">
            <input type="text" placeholder="First Name *" />
            <input type="text" placeholder="Last Name *" />
            <input type="email" placeholder="Email address *" />
            <input type="phone" placeholder="Mobile number *  " />
            <input type="number" placeholder=" Work experiance (in years) *" />
            <input type="file" placeholder="Update Resume *" />

          </div>
        </div>
      </main>
      {/* <footer>
        <div className="footer-content" >
          <ul style={{ color: "black" }}><li>Heading 1</li></ul>
          <ul style={{ color: "black" }}><li>Heading 1</li></ul>
          <ul style={{ color: "black" }}><li>Heading 1</li></ul>
        </div>
      </footer> */}
      <footer className="nt-footerwrap">
        <div className="container footer-content">

          {/* Logo section */}
          <div className="footer-logo">
            <img
              src="https://www.injala.com/images/logo.svg"
              alt="Injala Logo"
            />
            <p>
              Injala is the leading disruptor in the insurance industry, providing software technology solutions that are creating a transformational evolution in risk management.
            </p>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Other link sections */}
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Help</li>
          </ul>
          <ul>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </footer>


    </>
  );
}

export default Header;







