import "./CheckoutPedido.css";
function CheckoutPedido({
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
      <span id="return">
        <div>
          <i className="fa-solid fa-angle-left"></i> Continuar comprando
        </div>
      </span>
      <table cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td colSpan="4" id="empty_list">
              {pedidos.length === 0 ? "Carrinho Vazio" : ""}
            </td>
          </tr>
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
                    <span>{a.tipo}:&nbsp;</span>
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
              <td id="preco">
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
                <div
                  onClick={() => handleDeletePedido(pedido.ref)}
                  className="delete_produto"
                >
                  <i className="fa-solid fa-xl fa-xmark"></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default CheckoutPedido;
