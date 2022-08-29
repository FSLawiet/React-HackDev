import Bannercima from "../components/banner/Bannercima";
import Card from "../components/card/Card";
import { Produtos } from "../Data/dataProduct";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Banner2 from "../components/banner/Banner2";

function Home() {
    const pathPage = useNavigate();

    return (
        <>
            <Bannercima />
            <div className='Cards'>
                {Produtos.map((item, idx) => {
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
            <div className='Cards'>
                {Produtos.map((item, idx) => {
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
