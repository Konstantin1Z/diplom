import React from 'react';
import {Link} from "react-router-dom";
import '../style.css';
class Menu extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0};    
  
//this.addNew = this.addNew.bind(this);           [{"surname":"asfaf","name":"sfsd","otch":"sgdsdgds","age":"2020-01-22","mail":"fbdf@df","tel":"123121232234","sex":"F","about":"sdgsgg","pas1":"111111","pas2":"111111","nik":"asd","in":0},{"surname":"asd","name":"asd","otch":"asd","age":"2020-01-14","mail":"fbgdf@df","tel":"111111111111","sex":"M","about":"11111","pas1":"123456","pas2":"123456","nik":"123","in":0},{"surname":"asd1","name":"asd","otch":"asd","age":"2020-01-14","mail":"fbgdf1@df","tel":"111111111111","sex":"M","about":"11111","pas1":"123456","pas2":"123456","nik":"1238","in":0}]
 
  }

  render() {

var lin = "/Room";
var lin1 = "/In";
if (localStorage.getItem("reg") === null)
lin = "/";
lin1 = "/";
if (localStorage.getItem("reg") != null)
{
var h = localStorage.getItem("reg"); 
var hh = JSON.parse(h); 

var iin = 0;
for(let value of hh) 
{
if(value.in==1)
iin = 1;
}
if(iin==0)
{
lin = "/"; 
lin1 = "/In";  
}
else
{
lin = "/Room";
lin1 = "/";  
}






}





    return (

 <nav className="menu">
 	

<ul>
   <li className="var_nav">
      <div className="link_bg"></div>
      <div className="link_title">
        <div className="icon"> 
        <i className="icon-home icon-1x"></i>
        </div>
        <Link  to="/">Главная</Link>
      </div>
   </li>
   <li className="var_nav">
      <div className="link_bg"></div>
      <div className="link_title">
        <div className="icon"> 
        <i className="icon-shopping-cart icon-1x"></i>
        </div>
        <Link  to="/Catalog">Каталог продукции</Link>
      </div>
   </li>
   <li className="var_nav">
      <div className="link_bg"></div>
      <div className="link_title">
        <div className="icon"> 
        <i className="fas fa-user-plus icon-1x"></i>
        </div>
        <Link  to="/Reg">Регистрация</Link>
      </div>
   </li>
   <li className="var_nav">
      <div className="link_bg"></div>
      <div className="link_title">
        <div className="icon"> 
        <i className="fas fa-sign-in icon-1x"></i>
        </div>
      <Link  to={lin1}>Авторизация</Link>{/*"/In"*/}
      </div>
   </li>
 <li className="var_nav">
      <div className="link_bg"></div>
      <div className="link_title">
        <div className="icon"> 
        <i className="fas fa-user-circle icon-1x"></i>
        </div>
      <Link  to={lin}>Личный кабинет</Link>{/*"/Room"*/}
      </div>
   </li>
 <li className="var_nav">
      <div className="link_bg"></div>
      <div className="link_title">
        <div className="icon"> 
        <i className="fas fa-info-circle icon-1x"></i>
        </div>
      <Link  to="/About">О компании</Link>
      </div>
   </li>
 <li className="var_nav">
      <div className="link_bg"></div>
      <div className="link_title">
        <div className="icon"> 
        <i className="far fa-question-circle icon-1x"></i>
        </div>
      <Link  to="/FAQ">FAQ</Link>
      </div>
   </li>
 <li className="var_nav">
      <div className="link_bg"></div>
      <div className="link_title">
        <div className="icon"> 
        <i className="icon-briefcase icon-1x"></i>
        </div>
      <Link  to="/Blog">Блог компании</Link>
      </div>
   </li>

   
  </ul>


 </nav>  
 


    )

    }    
  }

export default Menu;