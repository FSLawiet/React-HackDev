import { useState, useEffect } from "react";
import CardEndereco from "./CardEndereco";
import CardFrete from "./CardFrete";
import "./Checkout.css";

function Pedido({
  pedidos,
  handleQtClickMinus,
  handleQtClickPlus,
  handleDeletePedido,
}) {
  return (
    <section id="pedido">
      <span>
        <h2>Seu pedido</h2>
      </span>
      <span>
        <a href="#">
          ( <i className="fa-solid fa-angle-left"></i> Voltar para o carrinho)
        </a>
      </span>
      <table cellSpacing="0" cellPadding="0">
        <tbody>
          {pedidos.map((pedido, i) => (
            <tr id="produtos_body" key={i}>
              <td className="produto_img">
                <img src={pedido.img} alt={pedido.nome} />
              </td>
              <td>
                <p className="produto_nome">{pedido.nome}</p>
                <p className="produto_ref">Referência {pedido.ref}</p>
                {pedido.attr.map((a, i) => (
                  <p className="produto_atributo" key={i}>
                    <span>{a.tipo}: </span>
                    <span>
                      <strong>{a.desc}</strong>
                    </span>
                  </p>
                ))}
                <div className="stepper">
                  <button
                    className="stepper__button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleQtClickMinus(pedido.ref);
                    }}
                  >
                    -
                  </button>
                  <div className="stepper__content">
                    <p className="stepper__value">{pedido.qt}</p>
                  </div>
                  <button
                    className="stepper__button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleQtClickPlus(pedido.ref);
                    }}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <p className="produto_preco">
                  <span className="dashed">
                    R$ {pedido.preco_int.toFixed(2)}
                  </span>
                </p>
                <p className="produto_preco">
                  <span>R$ {pedido.preco.toFixed(2)}</span>
                </p>
                <p className="produto_preco produto_total">
                  <span>R$ {(pedido.qt * pedido.preco).toFixed(2)}</span>
                </p>
              </td>
              <td>
                <a
                  onClick={() => handleDeletePedido(pedido.ref)}
                  className="delete_produto"
                >
                  <i className="fa-solid fa-xl fa-xmark"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
function Envio({
  user,
  handleAdressChange,
  handleObsChange,
  handleFormaPagamentoChange,
}) {
  return (
    <section id="envio">
      <h3>Destino</h3>
      <details>
        <summary>Envio</summary>
        <div id="endereco_cont">
          {user.adr.map((a, i) => (
            <div key={i}>
              <CardEndereco
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
            </div>
          ))}
        </div>
      </details>
      <details>
        <summary>Pagamento</summary>
        <div id="pagamentos">
          <table cellSpacing="0" cellPadding="0" width="100%">
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="forma_pagamento"
                    value="1"
                    onChange={handleFormaPagamentoChange}
                  />
                </td>
                <td>
                  <i className="fa-solid fa-qrcode" />
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
                    value="2"
                    onChange={handleFormaPagamentoChange}
                  />
                </td>
                <td>
                  <i className="fa-solid fa-barcode" />
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
                    value="3"
                    onChange={handleFormaPagamentoChange}
                  />
                </td>
                <td>
                  <i className="fa-solid fa-credit-card" />
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
                    value="4"
                    onChange={handleFormaPagamentoChange}
                  />
                </td>
                <td>
                  <i className="fa-solid fa-money-bill-transfer" />
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
      </details>
      <p id="obs_label">Observações</p>
      <textarea
        name="obs"
        id="obs"
        cols="30"
        rows="5"
        onChange={handleObsChange}
      ></textarea>
    </section>
  );
}
function Resumo({
  subtotal,
  forma_envio,
  forma_envio_selec,
  handleFormaEnvioChange,
  validateForm,
}) {
  return (
    <section id="resumo">
      <h2>Resumo</h2>
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
            <td colSpan="2">
              <label id="desconto" htmlFor="desconto">
                <i className="fa-solid fa-percent"></i>
                Possui cupom de desconto?
                <input type="text" id="desconto_input" name="desconto" />
                <button>Validar</button>
              </label>
            </td>
          </tr>
          <tr>
            <td className="row-div">
              <p className="prices-header">{forma_envio_selec.desc}</p>
            </td>
            <td className="row-div">
              <p className="prices">
                {forma_envio_selec.preco > 0
                  ? "+ R$ " + forma_envio_selec.preco.toFixed(2)
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
                R$ {(subtotal + forma_envio_selec.preco).toFixed(2)}
              </p>
              <p className="prices">
                em até 3X de R${" "}
                {((subtotal + forma_envio_selec.preco) / 3).toFixed(2)}
              </p>
              <p className="prices">
                ou {(subtotal + forma_envio_selec.preco).toFixed(2)} no
              </p>
              <p className="prices">
                depósito ou transferência com % de desconto
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="envio_cont">
        {forma_envio.map((fe, i) => (
          <div key={i}>
            <CardFrete
              id={fe.id}
              nome={fe.desc}
              preco={fe.preco}
              previsao={fe.previsao_dias}
              handleFormaEnvioChange={handleFormaEnvioChange}
              checked={forma_envio_selec.id}
            />
          </div>
        ))}
      </div>
      <input
        id="submit"
        className={validateForm ? "button" : "button inactive"}
        type="submit"
        value="Finalizar Compra"
      />
    </section>
  );
}
function Checkout() {
  const [carrinho, setCarrinho] = useState([
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
  ]);

  const handleQtClickMinus = (ref) => {
    let updatedCarrinho = carrinho.map((p) => {
      if (p.ref === ref && p.qt > 1) {
        return { ...p, qt: p.qt - 1 };
      }
      return p;
    });
    setCarrinho(updatedCarrinho);
  };
  const handleQtClickPlus = (ref) => {
    let updatedCarrinho = carrinho.map((p) => {
      if (p.ref === ref) {
        return { ...p, qt: p.qt + 1 };
      }
      return p;
    });
    setCarrinho(updatedCarrinho);
  };

  const handleDeletePedido = (ref) => {
    let updatedCarrinho = carrinho.filter((p) => p.ref !== ref);
    setCarrinho(updatedCarrinho);
  };

  const [user, setUser] = useState({
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
    obs: "",
    forma_pagamento: 0,
  });

  const handleAdressChange = (event) => {
    setCompra({
      adr_id: parseInt(event.target.value),
      forma_envio: compra.forma_envio,
      obs: compra.obs,
      forma_pagamento: compra.forma_pagamento,
    });
  };

  const handleFormaEnvioChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: parseInt(event.target.value),
      obs: compra.obs,
      forma_pagamento: compra.forma_pagamento,
    });
  };

  const handleObsChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: compra.forma_envio,
      obs: event.target.value,
      forma_pagamento: compra.forma_pagamento,
    });
  };

  const handleFormaPagamentoChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: compra.forma_envio,
      obs: compra.obs,
      forma_pagamento: parseInt(event.target.value),
    });
  };

  const handleCompra = (event, valid) => {
    //TODO
    event.preventDefault();

    if (valid) alert("Compra Finalizada!");
    else return null;
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
      <form
        method="POST"
        onSubmit={
          compra.adr_id === 0 || compra.forma_pagamento === 0
            ? (e) => handleCompra(e, false)
            : (e) => handleCompra(e, true)
        }
      >
        <Pedido
          pedidos={carrinho}
          handleQtClickMinus={handleQtClickMinus}
          handleQtClickPlus={handleQtClickPlus}
          handleDeletePedido={handleDeletePedido}
        />
        <Envio
          user={user}
          forma_envio={forma_envio}
          handleAdressChange={handleAdressChange}
          handleFormaPagamentoChange={handleFormaPagamentoChange}
          handleObsChange={handleObsChange}
        />
        <Resumo
          subtotal={carrinho.reduce((a, p) => {
            return a + p.qt * p.preco;
          }, 0)}
          forma_envio={forma_envio}
          forma_envio_selec={
            forma_envio.filter((fe) => fe.id === compra.forma_envio)[0]
          }
          handleFormaEnvioChange={handleFormaEnvioChange}
          validateForm={
            compra.adr_id === 0 || compra.forma_pagamento === 0 ? false : true
          }
        />
      </form>
    </main>
  );
}

export default Checkout;
