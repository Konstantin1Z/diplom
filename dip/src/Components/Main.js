import React from 'react';
import '../style.css';
import Home from "./Home";
import Catalog from "./Catalog";
import Detal from "./Detal";
import Reg from "./Reg";
import In from "./In";
import Room from "./Room";
import About from "./About";
import FAQ from "./FAQ";
import Blog from "./Blog";
import ChatMessage from "./ChatMessage";

//import {Route, IndexRoute, Switch, BrowserRouter as Router} from "react-router-dom";
import { Router, Route, IndexRoute, browserHistory, BrowserRouter, Switch } from 'react-router'




class Main extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {view: 0, mes: "", add: 0 }; //clik: 0, mas: []    
  
this.open = this.open.bind(this); 
this.close = this.close.bind(this); 
this.TextChange = this.TextChange.bind(this);
this.sendd = this.sendd.bind(this);
 } 


 open(event)
{this.setState({view: 1});}

close(event)
{this.setState({view: 0});}

TextChange(event){this.setState({mes: event.target.value});}

sendd(event)
{

this.setState({add: this.state.add + 1});

if (localStorage.getItem("Mes") != null)
{
var h = localStorage.getItem("Mes");
var hh = JSON.parse(h);

var mestext = this.state.mes;

hh.push(mestext);

var yxy = JSON.stringify(hh);
localStorage.setItem('Mes', yxy);

}

if (localStorage.getItem("Mes") === null)
 {
var y = [];

var mestext = this.state.mes;

y.push(mestext);

var yy = JSON.stringify(y);
localStorage.setItem('Mes', yy); 
 }

}



  render() {



var t = "";

var a,b,c;
// a="chat";
// b="chatOpen";
if(this.state.view==1)
{
a="chat hide";
b="chatOpen show";



if (localStorage.getItem("Mes") === null)
 {
t=null;
let sss = [];
let z0 = JSON.stringify(sss);
localStorage.setItem('Mes', z0); 
 }

if (localStorage.getItem("Mes") != null)
 {
 var cur = JSON.parse(localStorage.getItem('Mes'));
 var i=0;
 t = cur.map(cur =>{i++; return <ChatMessage key={i} text={cur}/>});
 }



}
else
{
a="chat show";
b="chatOpen hide";
}
// function dr1(){$("#ros").fadeToggle(1000);}
// function dr2(){$("#rosa").fadeToggle(1000);}
//fa fa-times

//let t = <div className="usermMsg"><div>{this.state.mes}</div><div><img src="src/img/personaa.png"/></div></div>


var color="";
if (localStorage.getItem("colors") != null)
{
var h = localStorage.getItem("colors");
color = JSON.parse(h);
}

let col = {backgroundColor: color};


    return (

<div className="content" style={{...col}}>
{/*<BrowserRouter>*/}
<Switch>
<Route exact path='/' component={Home} />         
<Route path='/Catalog' render={()=><Catalog clear="0"/>} />
<Route path='/Reg' component={Reg} />
<Route path='/In' component={In} />


<Route path='/Room' render={
()=>{

if (localStorage.getItem("reg") === null)
 {return <Home/>;}
else
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
	// vaal = value;
	break;
}
vaal++;
}
if(iin==0)
	return <Home/>;
else
	return <Room surname={hh[vaal].surname} name={hh[vaal].name} otch={hh[vaal].otch} age={hh[vaal].age} mail={hh[vaal].mail} tel={hh[vaal].tel} sex={hh[vaal].sex} about={hh[vaal].about} pas={hh[vaal].pas1} nik={hh[vaal].nik}/>;
}
}} />{/*component={Room}*/}


<Route path='/About' component={About} />
<Route path='/FAQ' component={FAQ} />
<Route path='/Blog' component={Blog} />
<Route path='/Detal' render={()=><Detal id={this.state.id}/>} />
</Switch>
{/*</BrowserRouter>*/}
















<div className={a} onClick={this.open}><img src="src/img/chat.png"/></div>
<div className={b}>

<div className="chatTitle">
<div><img src="src/img/mark_zuckerberg.png"/></div>	
<div>
Консультант<br/>
Марк Цукенберг<br/>
<div>online</div>
</div>
<div ><i className="fa fa-times-circle" onClick={this.close}></i></div>
</div>

<div className="chatBody">

<div className="messages">

<div className="message">
<div><img src="src/img/mark_zuckerberg.png"/></div>
<div>Hello</div>	
</div>

{t}

</div>





<div className="typp">
	
<textarea value={this.state.text} onChange={this.TextChange} />

<div id="senddd" onClick={this.sendd}>Отправить</div>

</div>


</div>


</div>
</div> 







    )

    }    
  }

export default Main;