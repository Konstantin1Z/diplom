import React from 'react';
import '../style.css';
import {Link} from "react-router-dom";

class Footer extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0};    
  
//this.addNew = this.addNew.bind(this);     , {this.props.id}
 

  }

  render() {




var color="";
if (localStorage.getItem("colors") != null)
{
var h = localStorage.getItem("colors");
color = JSON.parse(h);
}

let col = {backgroundColor: color};


    return (

<footer className="footer" style={{...col}}>

<div className="fup">
<div id="f1">
<div>Телефоны</div>
<div>+666(13)123-45-67</div>
<div>+666(13)765-43-21</div>
<div>Юридический адрес</div>
<div>США, Западная Виргиния,<br/>Сайлент Хилл, 13/7</div>
<div>УНП</div>
<div>1029384756</div>
</div>	
<div id="f2">
<div>Информация</div>	
<div><Link to="/FAQ">FAQ</Link></div>
<div><Link to="/About">О нас</Link></div>
<div><Link to="/About">Устав</Link></div>
<div><Link to="/About">Карта сайта</Link></div>
</div>
<div id="f3">
<div>Ваш аккаунт</div>	
<div><Link to="/Reg">Регистрация</Link></div>
<div><Link to="/In">Авторизация</Link></div>
<div><Link to="/Room">Любимые товары</Link></div>
<div><Link to="/Room">Баллы</Link></div>
</div>
<div id="f4">
<div>Мы в сети</div>	
<div><img src="src/img/youtube.png"/></div>
<div><img src="src/img/insta.png"/></div>
<div><img src="src/img/twitter.png"/></div>
<div><img src="src/img/facebook.png"/></div>
<div><img src="src/img/vk.png"/></div>
</div>


</div>




<div className="fdown">
	
<Link to="/"><img src="src/img/marka.png"/></Link>
<div>Компания "Imperia". Все права защищены.</div>
<div>2019</div>
</div>

</footer>  
    )

    }    
  }

export default Footer;