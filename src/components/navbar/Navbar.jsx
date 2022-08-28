import {
    IoPersonOutline,
    IoBagOutline,
    IoSearchOutline,
} from "react-icons/io5";
import "./Navbar.css";
import Logo from "./img/Hoshi.svg";
import { useEffect, useRef, useState } from "react";
import Carrinho from "../carrinho/carrinho";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [openModal, setOpenModal] = useState(false);
    const cartRef = useRef();

    const pathPagina = useNavigate();

    useEffect(() => {
        function handleClick(e) {
            if (
                cartRef.current &&
                openModal &&
                !cartRef.current.contains(e.target)
            )
                setOpenModal(false);
        }

        window.addEventListener("click", handleClick);

        return () => window.removeEventListener("click", handleClick);
    }, [openModal]);

    return (
        <>
            <nav className='NavBar'>
                <div
                    onClick={() => {
                        pathPagina("/");
                    }}
                    style={{ cursor: "pointer" }}
                >
                    <img className='NavBar__Logo' src={Logo} alt='' />
                </div>
                <ul className='NavBar__Lista'>
                    <li className='NavBar__Lista--Seção'>Populares</li>
                    <li className='NavBar__Lista--Seção'>Masculino</li>
                    <li className='NavBar__Lista--Seção'>Feminino</li>
                </ul>
                <div className='NavBar__CampoDeBusca'>
                    <input
                        type='text'
                        id='search'
                        placeholder='Pesquise aqui'
                    />
                    <IoSearchOutline />
                </div>
                <div className='NavBar__Icons' ref={cartRef}>
                    <IoPersonOutline
                        onClick={() => pathPagina("/login")}
                        style={{ cursor: "pointer" }}
                    />

                    <IoBagOutline
                        className='NavBar__Icon__bag'
                        onClick={() => setOpenModal(!openModal)}
                    />
                </div>
                {openModal && <Carrinho />}
            </nav>
        </>
    );
}

export default Navbar;
