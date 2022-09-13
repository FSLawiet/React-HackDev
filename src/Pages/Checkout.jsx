import { useContext, useState } from "react";
import CheckoutPedido from "../components/checkout/CheckoutPedido";
import CheckoutEnvio from "../components/checkout/CheckoutEnvio";
import CheckoutResumo from "../components/checkout/CheckoutResumo";
import Cupons from "../Data/dataCupons";
import { ProductContext } from "../context/produtosContext";

import "./Checkout.css";

function Checkout() {
  const { selectItens, setSelectItens, addItemCart, removeItemCart } =
    useContext(ProductContext);

  //TODO integração de context

  //objeto fixo de carrinho
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

  //objeto fixo de usuário (com os endereços)
  const [user] = useState({
    adr: [
      {
        id: 1,
        nome: "Robson",
        apelido: "Casa",
        rua: "Alameda dos Jacarandás",
        numero: 140,
        bairro: "São Luiz",
        cidade: "Belo Horizonte",
        estado: "MG",
        cep: "31275-060",
      },
      {
        id: 2,
        nome: "Celeste",
        apelido: "Trabalho",
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
    desconto: 1,
  });

  const handleAdressChange = (event) => {
    setCompra({
      adr_id: parseInt(event.target.value),
      forma_envio: compra.forma_envio,
      obs: compra.obs,
      forma_pagamento: compra.forma_pagamento,
      desconto: compra.desconto,
    });
  };

  const handleFormaEnvioChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: parseInt(event.target.value),
      obs: compra.obs,
      forma_pagamento: compra.forma_pagamento,
      desconto: compra.desconto,
    });
  };

  const handleObsChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: compra.forma_envio,
      obs: event.target.value,
      forma_pagamento: compra.forma_pagamento,
      desconto: compra.desconto,
    });
  };

  const handleFormaPagamentoChange = (event) => {
    setCompra({
      adr_id: compra.adr_id,
      forma_envio: compra.forma_envio,
      obs: compra.obs,
      forma_pagamento: parseInt(event.target.value),
      desconto: compra.desconto,
    });
  };

  const handleDesconto = (event, codigo) => {
    event.preventDefault();

    Cupons.foreach((cupom) => {
      if (cupom.codigo === codigo && cupom.validade >= new Date()) {
        console.log("Deu certo!");
        setCompra({
          adr_id: compra.adr_id,
          forma_envio: compra.forma_envio,
          obs: compra.obs,
          forma_pagamento: compra.forma_pagamento,
          desconto: cupom.desconto,
        });
      }
    });
  };

  //função de finalização da compra
  const handleCompra = (event, valid) => {
    //TODO
    event.preventDefault();

    if (valid) alert("Compra Finalizada!");
    else return null;
  };

  //formas de envio (fixas, banco de dados?)
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
          compra.adr_id === 0 ||
          compra.forma_pagamento === 0 ||
          carrinho.length === 0
            ? (e) => handleCompra(e, false)
            : (e) => handleCompra(e, true)
        }
      >
        <CheckoutPedido
          pedidos={carrinho}
          handleQtClickMinus={handleQtClickMinus}
          handleQtClickPlus={handleQtClickPlus}
          handleDeletePedido={handleDeletePedido}
        />
        <CheckoutEnvio
          user={user}
          forma_envio={forma_envio}
          handleAdressChange={handleAdressChange}
          handleFormaPagamentoChange={handleFormaPagamentoChange}
          handleObsChange={handleObsChange}
        />
        <CheckoutResumo
          subtotal={carrinho.reduce((a, p) => {
            return a + p.qt * p.preco;
          }, 0)}
          desconto={compra.desconto}
          forma_envio={forma_envio}
          forma_envio_selec={
            forma_envio.filter((fe) => fe.id === compra.forma_envio)[0]
          }
          handleDesconto={handleDesconto}
          handleFormaEnvioChange={handleFormaEnvioChange}
          validateForm={
            compra.adr_id === 0 ||
            compra.forma_pagamento === 0 ||
            carrinho.length === 0
              ? false
              : true
          }
        />
      </form>
    </main>
  );
}

export default Checkout;
