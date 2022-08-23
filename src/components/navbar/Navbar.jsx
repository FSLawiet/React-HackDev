import {
    IoPersonOutline,
    IoBagOutline,
    IoSearchOutline,
} from "react-icons/io5";
import "./Navbar.css";
import Logo from "./img/Hoshi.svg";
import { useState } from "react";
import Carrinho from "../carrinho/carrinho";

function Navbar() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <nav className='NavBar'>
                <div>
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
                <div className='NavBar__Icons'>
                    <IoPersonOutline />

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
