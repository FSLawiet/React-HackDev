import { useContext, useState, useEffect } from "react";
import CheckoutPedido from "../components/checkout/CheckoutPedido";
import CheckoutEnvio from "../components/checkout/CheckoutEnvio";
import CheckoutResumo from "../components/checkout/CheckoutResumo";
import axios from "axios";
import { ProductContext } from "../context/produtosContext";

import "./Checkout.css";

function Checkout() {
  const { selectItens, removeItemCart } = useContext(ProductContext);

  const [cupons, setCupons] = useState([]);
  //objeto fixo de usuário (com os endereços)
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    axios({
      url: "https://hoshi-api.herokuapp.com/cupons",
      method: "get",
    }).then((resp) => {
      setCupons(resp.data);
    });
    axios({
      url: "https://hoshi-api.herokuapp.com/users?id=1",
      method: "get",
    }).then((resp) => {
      setUsuario(resp.data[0]);
    });
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
    console.log(cupons, codigo);
    cupons.forEach((cupom) => {
      if (cupom.codigo === codigo) {
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

    if (valid) {
      axios({
        url: "https://hoshi-api.herokuapp.com/pedidos",
        method: "post",
        data: {
          usuario: usuario.id,
          adr_id: compra.adr_id,
          forma_envio: compra.forma_envio,
          obs: compra.obs,
          forma_pagamento: compra.forma_pagamento,
          desconto: compra.desconto,
          produtos: selectItens,
        },
      }).then((resp) => alert("Compra Finalizada!\n" + resp));
    } else return null;
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
          selectItens.length === 0
            ? (e) => handleCompra(e, false)
            : (e) => handleCompra(e, true)
        }
      >
        <CheckoutPedido
          pedidos={selectItens}
          handleDeletePedido={removeItemCart}
        />
        <CheckoutEnvio
          user={usuario}
          forma_envio={forma_envio}
          handleAdressChange={handleAdressChange}
          handleFormaPagamentoChange={handleFormaPagamentoChange}
          handleObsChange={handleObsChange}
        />
        <CheckoutResumo
          subtotal={parseFloat(
            selectItens.reduce((a, p) => {
              return a + parseFloat(p.valor);
            }, 0)
          ).toFixed(2)}
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
            selectItens.length === 0
              ? false
              : true
          }
        />
      </form>
    </main>
  );
}

export default Checkout;
