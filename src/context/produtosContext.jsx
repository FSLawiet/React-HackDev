import { createContext, useState } from "react";
import { Produtos } from "../Data/dataProduct";

export const ProductContext = createContext();

function ProductContexProvider({ children }) {
    const [data] = useState(Produtos);
    const [selectItens, setSelectItens] = useState([]);

    function addItemCart(value, item) {
        data.forEach((element) => {
            if (element.id === item.id) {
                setSelectItens((prev) => [
                    ...prev,
                    { ...item, sizeSelect: value },
                ]);
            }
        });
    }

    return (
        <ProductContext.Provider
            value={{ selectItens, setSelectItens, addItemCart }}
        >
            {children}
        </ProductContext.Provider>
    );
}
export default ProductContexProvider;
