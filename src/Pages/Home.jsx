import Bannercima from "../components/banner/Bannercima";
import Card from "../components/card/Card";
import axios from "axios";
//import { Produtos } from "../Data/dataProduct";
import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner2 from "../components/banner/Banner2";

function Home() {
  const pathPage = useNavigate();
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    axios({
      url: "https://hoshi-api.herokuapp.com/produtos",
      method: "get",
    }).then((resp) => setProdutos(resp.data));
  }, []);

  return (
    <>
      <Bannercima />
      <div className="Cards">
        {produtos.map((item, idx) => {
          if (item.id < 6)
            return (
              <Card
                key={idx}
                item={item}
                onClick={() => pathPage(`/product/${item.id}`)}
              />
            );
          return null;
        })}
      </div>
      <Banner2 />
      <div className="Cards">
        {produtos.map((item, idx) => {
          if (item.id >= 6)
            return (
              <Card
                key={idx}
                item={item}
                onClick={() => pathPage(`/product/${item.id}`)}
              />
            );
          return null;
        })}
      </div>
    </>
  );
}
export default Home;
