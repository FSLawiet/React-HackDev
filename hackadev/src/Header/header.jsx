import './header.css'

function Header() 
{
  return <header class="navbar">
      
        <a class="logo" href="header.html">Hoshi</a>
        
        <ul class="nav-list">
          <li><a  class="listaa" href="./header.jsx">Populares</a></li>
          <li><a  class="listaa" href="./header.jsx">Masculino</a></li>
          <li><a  class="listaa" href="./header.jsx">Feminino</a></li>
        </ul>
        <div id="busca">
            <p class="buscar">Buscar</p>
            <a  href="./header.jsx" >
              <img src="https://thumbs2.imgbox.com/8b/1d/tkAY3noJ_t.png" alt="busca"/>
            </a>  
        </div>
        <ul class="nav-icons">
          <li>
            <a href="https://imgbox.com/dnEq86dc" >
              <img src="https://thumbs2.imgbox.com/a7/63/dnEq86dc_t.png" alt="bag"/>
            </a>  
          </li>
          <li>
            <a href="https://imgbox.com/spKtIpN5">
              <img src="https://thumbs2.imgbox.com/68/aa/spKtIpN5_t.png" alt="user"/>
            </a>
          </li>
        </ul>
        <script src="mobile-navbar.js"></script>
    </header>
}
export default Header;