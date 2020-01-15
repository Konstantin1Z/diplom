import React from 'react';
import '../style.css';

class Reg extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {fam: '', name: "", otch: "", age: "", mail: "", tel: "", sex: "", about: "", pas1: "", pas2: "", nik: ""};    
  
this.handleSubmit = this.handleSubmit.bind(this);

this.famChange = this.famChange.bind(this);
this.nameChange = this.nameChange.bind(this);
this.otchChange = this.otchChange.bind(this);
this.ageChange = this.ageChange.bind(this);
this.mailChange = this.mailChange.bind(this);
this.telChange = this.telChange.bind(this);
this.mChange = this.mChange.bind(this);
this.jChange = this.jChange.bind(this);
this.aboutChange = this.aboutChange.bind(this);
this.pas1Change = this.pas1Change.bind(this);
this.pas2Change = this.pas2Change.bind(this);
this.nikChange = this.nikChange.bind(this);
  }

 

  handleSubmit(event) 
  {
  	if(this.state.pas1 != this.state.pas2)
  	{
alert('Пароли не совпадают');
event.preventDefault();
   	}
else 
{



if (localStorage.getItem("reg") === null)
 {
var y = [];
var bbb = {surname: this.state.fam, name: this.state.name, otch: this.state.otch, age: this.state.age, mail: this.state.mail, tel: this.state.tel, sex: this.state.sex, about: this.state.about, pas1: this.state.pas1, pas2: this.state.pas2, nik: this.state.nik, in: 0};
y.push(bbb);
var yy = JSON.stringify(y);
localStorage.setItem('reg', yy); 
 }


if (localStorage.getItem("reg") != null)
{
var h = localStorage.getItem("reg");
var hh = JSON.parse(h);

//var idd = hh.filter(item => item.id==this.props.id);

var prop = this.state.nik;
function findObj(hhh) {return hhh.nik==prop;}
var sas = hh.findIndex(findObj);

var prop1 = this.state.mail;
function findObj1(hhha) {return hhha.mail==prop1;}
var sas1 = hh.findIndex(findObj1);



if(sas != -1)
{
alert('Пользаватель с таким ником уже существует');
event.preventDefault();
}

if(sas == -1)
{


   if(sas1 != -1)
   {
   alert('Пользаватель с таким email уже существует');
   event.preventDefault();
   }

   if(sas1 == -1)
   {

   var h = localStorage.getItem("reg");
   var hh = JSON.parse(h);

   var bbb = {surname: this.state.fam, name: this.state.name, otch: this.state.otch, age: this.state.age, mail: this.state.mail, tel: this.state.tel, sex: this.state.sex, about: this.state.about, pas1: this.state.pas1, pas2: this.state.pas2, nik: this.state.nik, in: 0};
   hh.push(bbb);
   var yy = JSON.stringify(hh);
   localStorage.setItem('reg', yy);

   alert('Вы успешно зарегистрированы');
   event.preventDefault();

   }


}

}


}


  }

famChange(event) 
{
const re = /^[A-Za-zА-Яа-яЁё]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({fam: event.target.value});
}

nameChange(event) 
{
const re = /^[A-Za-zА-Яа-яЁё]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({name: event.target.value});
}

otchChange(event) 
{
const re = /^[A-Za-zА-Яа-яЁё]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({otch: event.target.value});
}
//
ageChange(event) {this.setState({age: event.target.value});}

mailChange(event) {this.setState({mail: event.target.value});}

telChange(event) 
{
const re = /^[0-9]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({tel: event.target.value});
}

mChange(event) {this.setState({sex: "M"});}

jChange(event) {this.setState({sex: "F"});}

aboutChange(event) {this.setState({about: event.target.value});}

pas1Change(event) 
{
// const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
// if (event.target.value === '' || re.test(event.target.value)) 
this.setState({pas1: event.target.value});
}

pas2Change(event) {this.setState({pas2: event.target.value});}

nikChange(event) {this.setState({nik: event.target.value});}


  render() {


{/*pattern="[A-Za-zА-Яа-яЁё0-9]{6,10}"*/}


    return (

<div>
<h1 className="reg">Регистрация</h1>	



<form className="contact_form" onSubmit={this.handleSubmit} name="reg_form">
    <ul>
        <li>
             <h2>Для регистрации на сайте заполните форму</h2>
             <span className="required_notification">* Обязательные для заполнения поля</span>
        </li>
        
		<li>
            <label for="fname">Фамилия:</label>
            <input type="text"  placeholder="Иванов" required value={this.state.fam} onChange={this.famChange} />
        </li>

        <li>
            <label for="name">Имя:</label>
            <input type="text"  placeholder="Иван" required value={this.state.name} onChange={this.nameChange} />
        </li>

		<li>
            <label for="oname">Отчество:</label>
            <input type="text"  placeholder="Иванович" required value={this.state.otch} onChange={this.otchChange} />
        </li>

        <li>
            <label for="age">Дата рождения:</label>
            <input type="date"  placeholder="John Doe" required value={this.state.age} onChange={this.ageChange} />
        </li>

        <li>
            <label for="email">Email:</label>
            <input type="email" name="email" placeholder="name@something.com" required value={this.state.mail} onChange={this.mailChange} />
            <span className="form_hint">Требуемый формат "name@something.com"</span>
        </li>

		<li>
            <label for="tel">Телефон:</label>
            <input type="tel" name="tel" minlength="12" maxlength="12" placeholder="375............" required value={this.state.tel} onChange={this.telChange} />
            <span className="form_hint">Требуемый формат "375291231212"</span>
        </li>

        <li>
            <label for="sex">Пол:</label>
            <span>M</span><input type="radio" name="sex" required onChange={this.mChange}/>
            <span>Ж</span><input type="radio" name="sex" required onChange={this.jChange}/>
        </li>
        <li>
            <label for="message">О себе:</label>
            <textarea name="message" cols="40" rows="6" value={this.state.about} onChange={this.aboutChange} ></textarea>
        </li>


		<li>
            <label for="name">логин для входа:</label>
            <input type="text"  placeholder="Altron009" required value={this.state.nik} onChange={this.nikChange} />
        </li>

		<li>
            <label for="pas1">Пароль:</label>
            <input type="password" name="pas1" pattern="[A-Za-zА-Яа-яЁё0-9]{6,10}"  required value={this.state.pas1} onChange={this.pas1Change} />
            <span className="form_hint">От 6 до 10 символов</span>
        </li>

		<li>
            <label for="pas2">Повторить пароль:</label>
            <input type="password" name="pas2" pattern="[A-Za-zА-Яа-яЁё0-9]{6,10}" required value={this.state.pas2} onChange={this.pas2Change} />
        </li>

        <li>
        	<button className="submit" type="submit">Зарегистрироваться</button>
        </li>
    </ul>
</form>


</div>


    )


    }    
  }

export default Reg;