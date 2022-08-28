import { useContext, useEffect, useState } from "react";
import "./carrinho.css";
import { ProductContext } from "../../context/produtosContext";

const Carrinho = () => {
    const { selectItens } = useContext(ProductContext);

    const [total, setTotal] = useState(0);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, []);

    return (
        <div className={`Container__carrinho ${animation && "Active"}`}>
            {selectItens.map((item, index) => (
                <div key={index}>
                    <div className='Teste1234'>
                        <div className='Imagem'>
                            <img
                                src={item.image}
                                alt='img'
                                className='Imagem'
                            />
                        </div>
                        <div className='name'>
                            <h4>{item.name}:</h4>
                            <div className='price'>R$ {item.price}</div>
                            <p>{item.sizeSelect}</p>
                            <div className='Adicionar-Remover'>
                                <button
                                    className='Qty__Button'
                                    disabled={item.qty < 1}
                                >
                                    -
                                </button>
                                <div className='col-qty'>{item.qty}</div>

                                <button className='Qty__Button'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='total-parcial'>Total:{item.total}</div>

                    <hr />
                </div>
            ))}
            <div className='valorTotal'>
                <h3>Valor Total: R${total}</h3>
                <button className='finalizar'> Finalizar Compra </button>
            </div>
        </div>
    );
};

export default Carrinho;
