import React from 'react';
import '../style.css';

class Room extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0, color: "#ffffff"};    
  
this.changeColor = this.changeColor.bind(this); 
this.enterColor = this.enterColor.bind(this); 
this.out = this.out.bind(this); 
  }

changeColor(event)
{
this.setState({color: event.target.value});
}

enterColor(event)
{

if (localStorage.getItem("colors") === null)
 {
var bbb = this.state.color;
var yy = JSON.stringify(bbb);
localStorage.setItem('colors', yy); 
 }

if (localStorage.getItem("colors") != null)
{
var h = localStorage.getItem("colors");
var hh = JSON.parse(h);
hh=this.state.color;
var yy = JSON.stringify(hh);
localStorage.setItem('colors', yy); 
}

}


out(event)
{
var h = localStorage.getItem("reg");
var hh = JSON.parse(h);

for(let value of hh)
{
value.in=0;
}

var yy = JSON.stringify(hh);
localStorage.setItem('reg', yy);

window.location.replace("/");

}


  render() {



var color="";
if (localStorage.getItem("colors") != null)
{
var h = localStorage.getItem("colors");
color = JSON.parse(h);
}


let sex = "";
if(this.props.sex=="M")
sex = "Мужчина";
if(this.props.sex=="F")
sex = "Женщина";

    return (

<div style = {{backgroundColor: color}}>
<h1 className="roomt">Личный кабинет</h1>

<div className="RCard">
<div>
<img src="/src/img/user.png"/>
<div><span>Фамилия:</span> {this.props.surname}</div>
<div><span>Имя:</span> {this.props.name}</div>
<div><span>Отчество:</span> {this.props.otch}</div>
<div><span>Дата рождения:</span> {this.props.age}</div>
<div><span>Пол:</span> {sex}</div>
<div><span>Телефон:</span> {this.props.tel}</div>
<div><span>EMail:</span> {this.props.mail}</div>
<div>Изменить данные</div>

</div>

<div>

<div>
Мои баллы: 100	
</div>	
<div>
Место в рейтинге: 3	
</div>	
<div>
Мои награды: 3	
</div>	
<div>
Мои лайки: 15	
</div>	
<div>
Мои дизлайки: 11	
</div>
<div>
Мои комментарии: 4 (подробнее)	
</div>
<div>
Мои сообщения	
</div>
<div>
Дата регистрации: 12.12.2012 <br/>
Дата последнего входа: 12.12.2012
</div>

</div>

</div>

<hr/>
<input type="color" onChange={this.changeColor}/> <button onClick={this.enterColor}>Применить</button>
<hr/>

<div className="out" onClick={this.out}><span>Выйти из учётной записи</span></div>




</div>  
    )

    }    
  }

export default Room;