import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductContexProvider({ children }) {
    const [selectItens, setSelectItens] = useState([]);

    function addItemCart(value, item) {
        let contains = false;

        if (!selectItens.length) {
            setSelectItens((prev) => [...prev, { ...item, sizeSelect: value }]);
            return;
        }

        selectItens.forEach((element) => {
            if (element.id === item.id) {
                console.log("Tem iguais");
                alert("Produto já existe!");
                contains = true;
                return;
            }
        });
        if (!contains)
            setSelectItens((prev) => [...prev, { ...item, sizeSelect: value }]);
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
