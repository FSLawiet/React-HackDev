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

    function removeItemCart(item) {
        const newSelectItens = selectItens.filter(
            (element) => item !== element.id && element
        );

        setSelectItens(newSelectItens);
    }

    return (
        <ProductContext.Provider
            value={{ selectItens, setSelectItens, addItemCart, removeItemCart }}
        >
            {children}
        </ProductContext.Provider>
    );
}
export default ProductContexProvider;
