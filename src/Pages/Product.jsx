import Produto from "../components/produto/Produto";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { Produtos } from "../Data/dataProduct";

function Product() {
  const { id } = useParams();
  const [produto, setProduto] = useState([]);
  useEffect(() => {
    axios({
      url: "https://hoshi-api.herokuapp.com/produtos?id=" + id,
      method: "get",
    }).then((resp) => {
      console.log(produto);
      setProduto(resp.data);
      console.log(produto);
    });
  });

  return (
    <>
      {produto.map(
        (item, idx) =>
          item.id === Number(id) && <Produto item={item} key={idx} />
      )}
    </>
  );
}
export default Product;
