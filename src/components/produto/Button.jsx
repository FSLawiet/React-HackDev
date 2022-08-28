import React from "react";

import "./Button.css";

const Button = ({ type = "text" }) => {
    return (
        <button className='produto-btn-adicionar' type={type}>
            Adicionar à Sacola
        </button>
    );
};

export default Button;
