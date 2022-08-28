import React, { useContext } from "react";

import "./Produto.css";
import Button from "./Button";
import { ProductContext } from "../../context/produtosContext";

const Produto = ({ item }) => {
    const { addItemCart } = useContext(ProductContext);

    function handleSizeSelect(e, item) {
        e.preventDefault();
        const [G, M, P] = e.target;

        switch (true) {
            case G.checked:
                addItemCart(G.value, item);
                break;

            case M.checked:
                addItemCart(M.value, item);
                break;

            case P.checked:
                addItemCart(P.value, item);
                break;

            default:
                break;
        }
    }

    return (
        <section className='produto-container'>
            <div className='image'>
                <img src={item.image} alt={item.name} />
            </div>
            <div className='description'>
                <h1>{item.name}</h1>
                <div className='valor__parcelas'>
                    <p>R$ {item.price}</p>
                    <p>em até 3x R$ {(item.price / 3).toFixed(2)}</p>
                </div>
                <div className='tamanhos'>
                    <p>Escolha o tamanho</p>
                    <form onSubmit={(e) => handleSizeSelect(e, item)}>
                        <input type='radio' name='size' id='G' value={"G"} />
                        <label className='Size__Button' htmlFor='G'>
                            G
                        </label>
                        <input type='radio' name='size' id='M' value={"M"} />
                        <label className='Size__Button' htmlFor='M'>
                            M
                        </label>
                        <input type='radio' name='size' id='P' value={"P"} />
                        <label className='Size__Button' htmlFor='P'>
                            P
                        </label>
                        <Button type={"submit"} />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Produto;
