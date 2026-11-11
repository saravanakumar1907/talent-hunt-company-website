
import React, { useEffect, useState } from "react";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8082/api/services")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Unable to load services. Please check the backend.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="services-section">
      <h1>Our Services</h1>
      <p>Explore the services we provide to help your business grow.</p>

      {loading && <p>Loading services...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="service-container">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Services;
