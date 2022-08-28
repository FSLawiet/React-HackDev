import { useContext, useEffect, useState } from "react";
import "./carrinho.css";
import { ProductContext } from "../../context/produtosContext";
import ItemCarrinho from "../itemCarrinho/index";
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
    const { selectItens } = useContext(ProductContext);

    const navigate = useNavigate();

    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, []);

    return (
        <div className={`Container__carrinho ${animation && "Active"}`}>
            {selectItens.length > 0 ? (
                <>
                    {selectItens.map((item, index) => (
                        <ItemCarrinho item={item} key={index} />
                    ))}
                    <div className='valorTotal'>
                        <h3>Valor Total: R$</h3>
                        <button
                            className='finalizar'
                            onClick={() => navigate("/checkout")}
                        >
                            {" "}
                            Finalizar Compra{" "}
                        </button>
                    </div>
                </>
            ) : (
                <h2>Sem itens!</h2>
            )}
        </div>
    );
};

export default Carrinho;
