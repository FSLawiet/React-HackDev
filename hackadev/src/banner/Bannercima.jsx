import './banner.css'
import Banner1 from './img/Banner1.png'
import Banner2 from './img/Banner2.png'
function Bannercima() 
{
  return <a href="/Bannercima.jsx">
    <ul class="slider">
    <li>
          <input type="radio" id="slide1" name="slide" checked/>
          <label for="slide1"></label>
          <img src={Banner1} alt="img"></img>
    </li>
    <li>
          <input type="radio" id="slide2" name="slide"/>
          <label for="slide2"></label>
          <img src={Banner2} alt="img"></img>
    </li>
  </ul>
  </a>
}

export default Bannercima;