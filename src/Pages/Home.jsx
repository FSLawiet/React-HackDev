import Bannercima from "../components/banner/Bannercima";
import Card from "../components/card/Card";
import { Produtos } from "../Data/dataProduct";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const pathPage = useNavigate();

    return (
        <>
            <Bannercima />
            <div className='Cards'>
                {Produtos.map((item, idx) => (
                    <Card
                        key={idx}
                        item={item}
                        onClick={() => pathPage(`/product/${item.id}`)}
                    />
                ))}
            </div>
        </>
    );
}
export default Home;
