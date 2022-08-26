import React from "react";
import "./CardEndereco.css";

function CardEndereco({
  key,
  id,
  nome,
  rua,
  numero,
  bairro,
  cidade,
  estado,
  cep,
  handleAdressChange,
}) {
  return (
    <label htmlFor={`address_${id}`} key={key}>
      <div className="card_endereco">
        <p>{nome}</p>
        <p>
          {rua}, {numero}
        </p>
        <p>
          {bairro} - {cidade} - {estado}
        </p>
        <p>
          <strong>{cep}</strong>
        </p>
        <p className="endereco_label">
          Endereço para envio{" "}
          <input
            type="radio"
            name="addresss"
            id={`address_${id}`}
            value={id}
            onChange={handleAdressChange}
          />
        </p>
      </div>
    </label>
  );
}

export default CardEndereco;
