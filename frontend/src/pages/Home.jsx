
import React from "react";

function Home() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="hero">

      {/* Left Side - 30% Quote */}
      <div className="hero-quote">

        <span className="quote-mark">“</span>

        <h2>
          <span className="empower-text">
            Empower Your{" "}
            <span className="talent-text">Talent</span>,
          </span>

          <span className="tomorrow-text">
            Build a{" "}
            <span className="better-text">Better</span>
            {" "}Tomorrow.
          </span>
        </h2>

        <p>
          Innovation begins with the right talent
          and the right technology.
        </p>

        <button onClick={scrollToServices}>
          Explore Our Services →
        </button>

      </div>

      {/* Right Side - 70% Technical Image */}
      <div className="hero-technical">

        <img
          src="/images/hero-tech.png"
          alt="Technology and DevOps Solutions"
        />

      </div>

    </section>
  );
}

export default Home;
