import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div id="footer_menu">
        <ul>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Ajuda</a>
          </li>
          <li>
            <a href="#">Conta</a>
          </li>
        </ul>
      </div>
      <div id="footer_sm">
        <p>Redes Sociais</p>
        <IconContext.Provider
          value={{ color: "var(--destaque)", size: "1.6em" }}
        >
          <ul>
            <li>
              <a href="https://facebook.com/">
                <FiFacebook />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/">
                <FiInstagram />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/">
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/">
                <FiYoutube />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
      <div id="footer_info">
        <p>© Hoshi - CNPJ: 00.000.000/0000-00</p>
        <p>rua Tal nº 000, Goiânia, Goiás</p>
      </div>
    </footer>
  );
};

export default Footer;
