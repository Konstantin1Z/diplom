import React from 'react';
import '../style.css';

class In extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {log: "", pas: ""};    
  
this.inSubmit = this.inSubmit.bind(this);    
this.logChange = this.logChange.bind(this);   
this.pasChange = this.pasChange.bind(this);   

  }


logChange(event) 
{
// const re = /^[A-Za-zА-Яа-яЁё]+$/;
// if (event.target.value === '' || re.test(event.target.value)) 
this.setState({log: event.target.value});
}

pasChange(event) 
{
// const re = /^[A-Za-zА-Яа-яЁё]+$/;
// if (event.target.value === '' || re.test(event.target.value)) 
this.setState({pas: event.target.value});
}

inSubmit(event) 
{
// alert("Авторизация");
// event.preventDefault();


var h = localStorage.getItem("reg");
var hh = JSON.parse(h);

//var idd = hh.filter(item => item.id==this.props.id);

var prop = this.state.log;
function findObj(hhh) {return hhh.nik==prop;}
var sas = hh.findIndex(findObj);




if(sas == -1)
{
alert("Такого пользователя не существует");
event.preventDefault();
}

if(sas != -1)
{

if(this.state.pas != hh[sas].pas1)
{
alert("Неверный пароль");
event.preventDefault();
}

if(this.state.pas == hh[sas].pas1)
{

for(let value of hh)
{
value.in=0;
}


hh[sas].in=1;

var yy = JSON.stringify(hh);
   localStorage.setItem('reg', yy);

alert("Добро пожаловать " + this.state.log + ". Вы успешно авторизированы");
event.preventDefault();
}

// alert("Такого пользователя не существует");
// event.preventDefault();
}





}



  render() {

    return (

<div>
<h1 className="in">Авторизация</h1>



<form className="contact_form" onSubmit={this.inSubmit} name="auth_form">
    <ul>
        <li>
             <h2>Для авторизации на сайте заполните форму</h2>
             <span className="required_notification">* Обязательные для заполнения поля</span>
        </li>
        
		<li>
            <label for="fname">Логин:</label>
            <input type="text" required value={this.state.log} onChange={this.logChange} />
        </li>

        <li>
            <label for="name">Пароль:</label>
            <input type="text" required value={this.state.pas} onChange={this.pasChange} />
        </li>

        <li>
        	<button className="submit" type="submit">Войти</button>
        </li>
    </ul>
</form>





</div>  
    )

    }    
  }

export default In;