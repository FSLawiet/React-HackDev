import Produto from "../components/produto/Produto";
import { useParams } from "react-router-dom";
import { Produtos } from "../Data/dataProduct";

function Product() {
    const { id } = useParams();

    return (
        <>
            {Produtos.map(
                (item, idx) =>
                    item.id === Number(id) && <Produto item={item} key={idx} />
            )}
        </>
    );
}
export default Product;
