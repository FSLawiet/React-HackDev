/* eslint-disable array-callback-return */
import Produto from "../components/produto/Produto";
import { useParams } from "react-router-dom";
import { Produtos } from "../Data/dataProduct";

function Product() {
    const { id } = useParams();

    return (
        <>
            {Produtos.map((item, idx) => {
                if (item.id === Number(id))
                    return <Produto item={item} key={idx} id={id} />;
            })}
        </>
    );
}
export default Product;
