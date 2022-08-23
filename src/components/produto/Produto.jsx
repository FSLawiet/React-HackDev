import React from "react";

import './Produto.css';
import Button from "./Button";

const Produto = () => {
  return ( 
      <section className="produto-container">
        <div className="image">
          <img src="images/foto1.png" alt="" />
        </div>
        <div className="description">
          <h1>BLUSA UNIVERSO</h1>
          <div className="valor__parcelas">
            <p>R$ 199,90</p>
            <p>em até 3x R$ 66,63</p>
          </div>
          <div className="tamanhos">
            <p>Escolha o tamanho</p>
            <button>P</button>
            <button>M</button>
            <button>G</button>
          </div>

          <Button />
        </div>
      </section>
  );
};

export default Produto;
