import './banner.css'
import Banner3 from './img/Banner3.png'
import Banner4 from './img/Banner4.png'
function Bannerbaixo() 
{
  return <a href="/Bannerbaixo.jsx">
    <ul class="slider">
    <li>
          <input type="radio" id="slide1" name="slide" checked/>
          <label for="slide1"></label>
          <img src={Banner3} alt="img"></img>
    </li>
    <li>
          <input type="radio" id="slide2" name="slide"/>
          <label for="slide2"></label>
          <img src={Banner4} alt="img"></img>
    </li>
  </ul>
  </a>
}

export default Bannerbaixo;