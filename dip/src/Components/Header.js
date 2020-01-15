import React from 'react';
import '../style.css';

class Header extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0};    
  
//this.addNew = this.addNew.bind(this);     , {this.props.id}
 

  }

  render() {
let a = "Здравствуйте";
let b = "Добро пожаловать на наш сайт";
if (localStorage.getItem("reg") === null)
 {
a = a + " гость";
 }


if (localStorage.getItem("reg") != null)
{
var h = localStorage.getItem("reg");
var hh = JSON.parse(h);

var iin = 0;
var vaal = 0;
for(let value of hh) 
{
if(value.in==1)
{
	iin = 1;
	
	break;
}
vaal++;
}
if(iin==0)
	a = "Здравствуйте гость";
else
{
	a="Здравствуйте " + hh[vaal].nik + ".";
	b= "Мы рады снова видеть вас на нашем сайте";
}


}
//}




//}


    return (

<header className="head">
<img src="src/img/rib.png"/>
<img src="src/img/marka.png"/>
<div className="hello">{a}<br/>{b}</div>
</header>  
    )

    }    
  }

export default Header;