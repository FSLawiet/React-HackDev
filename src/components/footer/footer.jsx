import './footer.css'

function Footer() 
{
  return <footer class="rodape">
            <div id="final">
                <div id="opcoesfinal">
                    <h2 class="opcoes">Sobre</h2>
                    <h2 class="opcoes">Contato</h2>
                    <h2 class="opcoes">Ajuda</h2>
                    <h2 class="opcoes">Conta</h2>
                </div>
                <div>
                    <h2 class="redes">Redes Sociais</h2>
                    <a href="./facebook.html" >
                        <img src="https://thumbs2.imgbox.com/35/5f/S7lB2buB_t.png" alt="facebook"/>
                    </a>
                    <a href="/instagram.html" >
                        <img src="https://thumbs2.imgbox.com/fd/98/7mGkEtiH_t.png" alt="instagram"/>
                    </a> 
                    <a href="/linkedin.html" >
                        <img src="https://thumbs2.imgbox.com/ed/6d/49IKaAUg_t.png" alt="linkedin"/>
                    </a>
                    <a href="/youtube.html" >
                        <img src="https://thumbs2.imgbox.com/84/b1/V1KiLvge_t.png" alt="youtube"/>
                    </a>
                    <hr></hr>        
                </div>
                <div>
                    <p>@2022 Hoshi  - CNPJ:00.000.000/0000-00 </p>
                    <br></br>
                    <p> rua Tal n°000 ,Goiânia , Goiás</p>
                </div>
                
                
            </div>
        </footer>
}
export default Footer;