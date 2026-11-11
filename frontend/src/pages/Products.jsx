
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("API Error:", error));
  }, []);

  return (
    <section className="services-section">
      <h1>Our Products</h1>

      <p>
        Explore our software products designed to simplify
        your business operations.
      </p>

      <div className="service-container">
        {products.map((product) => {
          const imageSrc = "/images/learning.jpg";

          return (
            <div className="service-card" key={product.id}>

              {product.imageUrl && (
                <img
                  src={imageSrc}
                  alt={product.title}
                  className="product-image"
                />
              )}

              <h3>{product.title}</h3>

              <p>{product.description}</p>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
