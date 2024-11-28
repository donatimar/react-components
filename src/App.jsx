import React from "react";
import "./App.css";
import image from "./assets/images.png";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-light text-center py-3">
        <h1 className="mb-4 fw-bold">Il mio blog</h1>
      </header>

      <main className="flex-grow-1 bg-light py-5">
        <div className="container d-flex justify-content-center">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={image}
              className="card-img-top img-fluid"
              alt="Placeholder"
            />

            <div className="card-body text-start">
              <h5 className="card-title">Titolo del post</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                perferendis cumque numquam illo non ducimus hic veritatis est
                quae maxime sint quia laudantium nesciunt, iste ipsa magni atque
                ratione libero?
              </p>
              <a href="#" className="btn custom-btn">
                LEGGI DI PIU'
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-light text-center py-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolorem
        expedita! Laudantium modi corrupti architecto nobis incidunt dignissimos
        id natus repellendus reprehenderit, omnis a, tempore possimus? Sit,
        earum at. Modi!
      </footer>
    </div>
  );
}

export default App;
