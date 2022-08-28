import "./Footer.css";
import Facebook from "./img-footer/Facebook.svg";
import Instagram from "./img-footer/Instagram.svg";
import LinkedIn from "./img-footer/LinkedIn.svg";
import YouTube from "./img-footer/YouTube.svg";

function Footer() {
    return (
        <>
            <footer className='Footer'>
                <div className='Footer__Info'>
                    <div className='Footer__Links'>Sobre</div>
                    <div className='Footer__Links'>Contato</div>
                    <div className='Footer__Links'>Ajuda</div>
                    <div className='Footer__Links'>Conta</div>
                </div>

                <h3 className='Footer__Titulo'>Redes Sociais</h3>

                <div className='Footer__Redes'>
                    <img
                        className='Footer__Redes-Icons'
                        src={Facebook}
                        alt='Página Facebook'
                    />
                    <img
                        className='Footer__Redes-Icons'
                        src={Instagram}
                        alt='Página Instagram'
                    />
                    <img
                        className='Footer__Redes-Icons'
                        src={LinkedIn}
                        alt='Página Linkedin'
                    />
                    <img
                        className='Footer__Redes-Icons'
                        src={YouTube}
                        alt='Página YouTube'
                    />
                </div>

                <span className='Footer__Line'>
                    {" "}
                    <hr />{" "}
                </span>

                <p className='Footer__Texto'>
                    @2022 Hoshi - CNPJ:00.000.000/0000-00 rua Tal n°000 ,Goiânia
                    , Goiás
                </p>
            </footer>
        </>
    );
}

export default Footer;
