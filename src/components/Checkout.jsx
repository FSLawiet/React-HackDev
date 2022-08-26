import { useState, useEffect } from "react";
import CardEndereco from "./CardEndereco";
import CardFrete from "./CardFrete";
import "./Checkout.css";

function Pedido({ pedidos }) {
  return (
    <div id="pedido">
      <span>
        <h2>Seu pedido</h2>
      </span>
      <span>
        <a href="#">
          (<i className="fa-solid fa-angle-left"></i> Voltar para o carrinho)
        </a>
      </span>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Atributos</th>
            <th className="produto_head_preço">Preço Unit.</th>
            <th className="produto_head_preço">Total</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, i) => (
            <tr id="produtos_body" key={i}>
              <td className="produto_img">
                <img src={pedido.img} alt={pedido.nome} />
                <div className="produto_img_qt">{pedido.qt}x</div>
              </td>
              <td>
                <p className="produto_nome">{pedido.nome}</p>
                <p className="produto_ref">Referência {pedido.ref}</p>
              </td>
              <td>
                {pedido.attr.map((a, i) => (
                  <p className="produto_atributo" key={i}>
                    <span>{a.tipo}: </span>
                    <span>
                      <strong>{a.desc}</strong>
                    </span>
                  </p>
                ))}
              </td>
              <td>
                <p className="produto_preco">
                  <span className="dashed">
                    R$ {pedido.preco_int.toFixed(2)}
                  </span>
                  <span>R$ {pedido.preco.toFixed(2)}</span>
                </p>
              </td>
              <td>
                <p className="produto_preco">
                  <span>R$ {(pedido.qt * pedido.preco).toFixed(2)}</span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Envio({
  user,
  forma_envio,
  forma_envio_selec,
  forma_frete,
  forma_frete_selec,
  handleAdressChange,
  handleFormaEnvioChange,
  handleFormaFreteChange,
  handleObsChange,
}) {
  return (
    <div id="envio">
      <h3>Você</h3>
      <div id="voce">
        <span id="voce_email">{user.email}</span>
        <span id="voce_email_link">
          <a href="#">Sair e Trocar</a>
        </span>
      </div>
      <h3>Destino</h3>
      <div className="address-carrousel">
        {user.adr.map((a, i) => (
          <CardEndereco
            key={i}
            id={a.id}
            nome={a.nome}
            rua={a.rua}
            numero={a.rua}
            bairro={a.bairro}
            cidade={a.cidade}
            estado={a.estado}
            cep={a.cep}
            handleAdressChange={handleAdressChange}
          />
        ))}
        <a className="prev">&#10094;</a>
        <a className="next">&#10095;</a>
      </div>
      <br />
      <div style={{ textalign: "center" }}>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div id="frete_cont">
        <h3>Forma de Envio</h3>
        <div id="envio_cont">
          {forma_envio.map((fe, i) => (
            <CardFrete
              key={i}
              id={fe.id}
              nome={fe.nome}
              preco={fe.preco}
              previsao={fe.previsao_dias}
              handleFormaEnvioChange={handleFormaEnvioChange}
            />
          ))}
        </div>
      </div>
      <div id="info">
        <i className="fa-solid fa-info fa-2xl"></i>Prazo de entrega dos Correios
        é de até 5 dias úteis seguintes ao da postagem.
      </div>
      <p id="obs_label">Observações</p>
      <textarea
        name="obs"
        id="obs"
        cols="30"
        rows="5"
        onChange={handleObsChange}
      ></textarea>
    </div>
  );
}
function Resumo({ subtotal, forma_envio, handleFormaPagamentoChange }) {
  console.log(subtotal, forma_envio.preco, subtotal + forma_envio.preco);
  return (
    <div id="resumo">
      <h3>Resumo</h3>
      <table cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td className="row-div">
              <p className="prices-header">Subtotal</p>
            </td>
            <td className="row-div">
              <p className="prices">R$ {subtotal.toFixed(2)}</p>
            </td>
          </tr>
          <tr>
            <td className="row-div">
              <p className="prices-header">{forma_envio.desc}</p>
            </td>
            <td className="row-div">
              <p className="prices">
                {forma_envio.preco > 0
                  ? "+ R$ " + forma_envio.preco.toFixed(2)
                  : "Grátis"}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="prices-header total-header">Total do Pedido</p>
            </td>
            <td>
              <p className="prices total">
                R$ {(subtotal + forma_envio.preco).toFixed(2)}
              </p>
              <p className="prices">
                em até 3X de R${" "}
                {((subtotal + forma_envio.preco) / 3).toFixed(2)}
              </p>
              <p className="prices">
                ou {(subtotal + forma_envio.preco).toFixed(2)} no
              </p>
              <p className="prices">
                depósito ou transferência com % de desconto
              </p>
            </td>
          </tr>
          <tr>
            <td className="points" colSpan="2">
              <img src="./img/refund.png" />
              <p>Você ganha {subtotal} pontos nesta compra. Aproveite!</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <p id="desconto">
                <i className="fa-solid fa-percent"></i> Possui cupom de
                desconto?
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Como deseja pagar?</h3>
      <table cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td>
              <input
                type="radio"
                name="forma_pagamento"
                id="forma_pagamento"
                value="1"
                onChange={handleFormaPagamentoChange}
              />
            </td>
            <td>
              <i className="fa-solid fa-qrcode"></i>
            </td>
            <td>
              <p className="forma_pagamento_titulo">Pix</p>
            </td>
            <td>
              <p className="forma_pagamento_desc"></p>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="forma_pagamento"
                id="forma_pagamento"
                value="2"
                onChange={handleFormaPagamentoChange}
              />
            </td>
            <td>
              <i className="fa-solid fa-barcode"></i>
            </td>
            <td>
              <p className="forma_pagamento_titulo">Boleto</p>
            </td>
            <td>
              <p className="forma_pagamento_desc">à vista</p>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="forma_pagamento"
                id="forma_pagamento"
                value="3"
                onChange={handleFormaPagamentoChange}
              />
            </td>
            <td>
              <i className="fa-solid fa-credit-card"></i>
            </td>
            <td>
              <p className="forma_pagamento_titulo">Cartão de Crédito</p>
            </td>
            <td>
              <p className="forma_pagamento_desc">
                em 2X sem juros ou até 3x no cartão.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="forma_pagamento"
                id="forma_pagamento"
                value="4"
                onChange={handleFormaPagamentoChange}
              />
            </td>
            <td>
              <i className="fa-solid fa-money-bill-transfer"></i>
            </td>
            <td>
              <p className="forma_pagamento_titulo">Depósito Bancário</p>
            </td>
            <td>
              <p className="forma_pagamento_desc">
                <img
                  className="forma_pagamento_img"
                  src="./img/bb.png"
                  alt="Banco do Brasil"
                />
                <img
                  className="forma_pagamento_img"
                  src="./img/bradesco.png"
                  alt="Bradesco"
                />
                <img
                  className="forma_pagamento_img"
                  src="./img/caixa.png"
                  alt="Caixa Econômica Federal"
                />
                <img
                  className="forma_pagamento_img"
                  src="./img/itau.png"
                  alt="Itaú"
                />
                <img
                  className="forma_pagamento_img"
                  src="./img/sicoob.png"
                  alt="SICOOB"
                />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function Checkout() {
  const [carrinho, setCarrinho] = useState({
    pedidos: [
      {
        nome: "Kit Amortecedor Teste - Virtual",
        ref: "04357",
        img: "./img/prod1.png",
        attr: [],
        qt: 5,
        preco_int: 3000.0,
        preco: 180.0,
      },
      {
        nome: "Celular",
        ref: "5675675",
        img: "./img/prod2.png",
        attr: [
          {
            tipo: "Cor",
            desc: "Medium Brown",
          },
        ],
        qt: 5,
        preco_int: 10000.0,
        preco: 90.0,
      },
    ],
  });
  const [user, setUser] = useState({
    email: "user@email.com",
    adr: [
      {
        id: 1,
        nome: "Plataforma Dollyinho",
        rua: "Alameda dos Jacarandás",
        numero: 140,
        bairro: "São Luiz",
        cidade: "Belo Horizonte",
        estado: "MG",
        cep: "31275-060",
      },
      {
        id: 2,
        nome: "Plataforma do seu Amiguinho",
        rua: "Alameda dos Jacarandás",
        numero: 140,
        bairro: "São Luiz",
        cidade: "Belo Horizonte",
        estado: "MG",
        cep: "31275-060",
      },
    ],
  });
  const [compra, setCompra] = useState({
    adr_id: 0,
    forma_envio: 1,
    forma_frete: 1,
    obs: "",
    forma_pagamento: 0,
  });

  const handleAdressChange = (event) => {
    setCompra({
      adr_id: parseInt(event.target.value),
      forma_envio: compra.forma_envio,
      forma_frete: compra.forma_frete,
      obs: compra.obs,
      forma_pagamento: compra.forma_pagamento,
    });
  };

  const handleFormaEnvioChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: parseInt(event.target.value),
      forma_frete: compra.forma_frete,
      obs: compra.obs,
      forma_pagamento: compra.forma_pagamento,
    });
  };

  const handleFormaFreteChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: compra.forma_envio,
      forma_frete: parseInt(event.target.value),
      obs: compra.obs,
      forma_pagamento: compra.forma_pagamento,
    });
  };

  const handleObsChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: compra.forma_envio,
      forma_frete: compra.forma_frete,
      obs: event.target.value,
      forma_pagamento: compra.forma_pagamento,
    });
  };

  const handleFormaPagamentoChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: compra.forma_envio,
      forma_frete: compra.forma_frete,
      obs: compra.obs,
      forma_pagamento: parseInt(event.target.value),
    });
  };

  const handleCompra = (event) => {
    //TODO
    event.preventDefault();
    console.log(event.target);
    alert("Compra Finalizada!");
  };

  const forma_envio = [
    {
      id: 1,
      desc: "Retirada no local",
      preco: 0.0,
      previsao_dias: 0,
    },
    {
      id: 2,
      desc: "PAC",
      preco: 32.2,
      previsao_dias: 3,
    },
    {
      id: 3,
      desc: "SEDEX",
      preco: 39.52,
      previsao_dias: 2,
    },
  ];

  return (
    <main>
      <form method="POST" onSubmit={handleCompra}>
        <Pedido pedidos={carrinho.pedidos} />
        <Envio
          user={user}
          forma_envio={forma_envio}
          forma_envio_selec={compra.forma_envio}
          forma_frete={forma_frete}
          forma_frete_selec={compra.forma_frete}
          handleAdressChange={handleAdressChange}
          handleFormaEnvioChange={handleFormaEnvioChange}
          handleFormaFreteChange={handleFormaFreteChange}
          handleObsChange={handleObsChange}
        />
        <Resumo
          subtotal={carrinho.pedidos.reduce((a, p) => {
            return a + p.qt * p.preco;
          }, 0)}
          forma_envio={
            forma_envio.filter((fe) => fe.id === compra.forma_envio)[0]
          }
          handleFormaPagamentoChange={handleFormaPagamentoChange}
        />
        <div id="rodape">
          <a href="#">
            <p>
              <i className="fa-solid fa-angle-left"></i> Voltar para o carrinho
            </p>
          </a>
          <input type="submit" value="Finalizar Compra" />
        </div>
      </form>
    </main>
  );
}

export default Checkout;
