import { useEffect, useState } from "react";
import "./carrinho.css";
import { Produtos } from "../../Data/dataProduct";

const Carrinho = () => {
    const [produto, setProduto] = useState(Produtos);
    const [total, setTotal] = useState(0);
    const [animation, setAnimation] = useState(false);

    const add = (id) => {
        const newProduto = produto.map((item) => {
            if (id === item.id)
                return {
                    ...item,
                    qty: item.qty + 1,
                    total: (item.qty + 1) * item.price,
                };
            return item;
        });
        setProduto(newProduto);
    };

    const remove = (id) => {
        const removerProduto = produto.map((item) => {
            if (id === item.id)
                return {
                    ...item,
                    qty: item.qty - 1,
                    total: (item.qty - 1) * item.price,
                };
            return item;
        });
        setProduto(removerProduto);
    };

    useEffect(() => {
        const finalizarCompra = () => {
            let total = 0;
            produto.map((item) => (total += item.total));
            setTotal(total);
        };
        finalizarCompra();

        setAnimation(true);
    }, [produto]);

    return (
        <div className={`Container__carrinho ${animation && "Active"}`}>
            {produto.map((item, index) => (
                <div key={index}>
                    <div>
                        <div className='Imagem'>
                            <img
                                src={item.image}
                                alt='img'
                                className='Imagem'
                            />
                        </div>
                        <div className='name'>
                            <h4>{item.name}:</h4>
                        </div>
                        <div className='price'>R$ {item.price}</div>
                    </div>
                    <div className='col-qty'>Quantidade:{item.qty}</div>
                    <div className='total-parcial'>Total:{item.total}</div>

                    <div className='Adicionar-Remover'>
                        <button onClick={() => add(item.id)}>+</button>
                        <button
                            onClick={() => remove(item.id)}
                            disabled={item.qty < 1}
                        >
                            -
                        </button>
                    </div>

                    <hr />
                </div>
            ))}
            <div className='valorTotal'>
                <h3>Valor Total: R${total}</h3>
                <button className='finalizar'> finalizar Compra </button>
            </div>
        </div>
    );
};

export default Carrinho;
