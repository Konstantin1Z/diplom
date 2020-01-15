import React from 'react';
import '../style.css';
import Comment from "./Comment";

class Article extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0, com: 0, name: "", text: "", like: 0, diss: 0, add: 0};    //mas: [], likes: [], 
  
this.coms = this.coms.bind(this);     
this.coms1 = this.coms1.bind(this); 
this.dateT = this.dateT.bind(this);
this.like = this.like.bind(this);
this.dislike = this.dislike.bind(this);

this.NameChange = this.NameChange.bind(this);
this.TextChange = this.TextChange.bind(this);

  }


coms(event) {this.setState({com: 1});}
coms1(event) {this.setState({com: 0});}

NameChange(event){this.setState({name: event.target.value});}
TextChange(event){this.setState({text: event.target.value});}


like(event) 
{
  this.setState({like: this.state.like + 1});


if (localStorage.getItem("likes") === null)
 {
var y = [];
var bbb = {id: this.props.id, like: this.state.like + 1, dis: this.state.diss};
y.push(bbb);
var yy = JSON.stringify(y);
localStorage.setItem('likes', yy); 
 }

if (localStorage.getItem("likes") != null)
{
var h = localStorage.getItem("likes");
var hh = JSON.parse(h);

//var idd = hh.filter(item => item.id==this.props.id);

var prop = this.props.id;
function findObj(hhh) {return hhh.id==prop;}
var sas = hh.findIndex(findObj);

if(sas != -1)
{
hh[sas].like = hh[sas].like +1;//this.state.like +1;
//hh[sas].dis = this.state.diss;
}

if(sas == -1)
{
var bbb = {id: this.props.id, like: this.state.like + 1, dis: this.state.diss};
hh.push(bbb);
}

var yxy = JSON.stringify(hh);
localStorage.setItem('likes', yxy);


}

}

dislike(event) 
{
this.setState({ diss: this.state.diss + 1 });

if (localStorage.getItem("likes") === null)
 {
var y = [];
var bbb = {id: this.props.id, like: this.state.like, dis: this.state.diss + 1};
y.push(bbb);
var yy = JSON.stringify(y);
localStorage.setItem('likes', yy); 
 }

if (localStorage.getItem("likes") != null)
{
var h = localStorage.getItem("likes");
var hh = JSON.parse(h);

var idd = hh.filter(item => item.id==this.props.id);

var prop = this.props.id;
function findObj(hhh) {return hhh.id==prop;}
var sas = hh.findIndex(findObj);

if(sas != -1)
{
//hh[sas].like = this.state.like;
hh[sas].dis = hh[sas].dis +1;//this.state.diss +1;
}

if(sas == -1)
{
var bbb = {id: this.props.id, like: this.state.like, dis: this.state.diss + 1};
hh.push(bbb);
}

var yxy = JSON.stringify(hh);
localStorage.setItem('likes', yxy);


}


}


// --------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------


dateT(event) 
{
this.setState({ add: this.state.add + 1 });
if (localStorage.getItem("Komenti") != null)
{
var h = localStorage.getItem("Komenti");
var hh = JSON.parse(h);

let d=new Date();
let day=d.getDate();
let month=d.getMonth() + 1;
let year=d.getFullYear();
let hour = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
var result=day + "." + month + "." + year + " " + hour + ":" + m + ":" + s;

var Comment = {id: this.props.id, date: result, name: this.state.name, text: this.state.text};

hh.push(Comment);

var yxy = JSON.stringify(hh);
localStorage.setItem('Komenti', yxy);

}

if (localStorage.getItem("Komenti") === null)
 {
var y = [];

let d=new Date();
let day=d.getDate();
let month=d.getMonth() + 1;
let year=d.getFullYear();
let hour = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
var result=day + "." + month + "." + year + " " + hour + ":" + m + ":" + s;

var Comment = {id: this.props.id, date: result, name: this.state.name, text: this.state.text};

y.push(Comment);

var yy = JSON.stringify(y);
localStorage.setItem('Komenti', yy); 
 }
	




}







// --------------------------------------------------------------------------------------------





  render() {


let d = this.props.text;

$(document).ready(
    function()
    {
        document.getElementById("zzz").innerHTML = d;
    }
);

let clas = "comform";
let clas1, clas2;
if(this.state.com==0)
{
clas += " hide";
clas1 += " show";
clas2 += " hide";	
}

if(this.state.com==1)
{
clas += " flex";
clas1 += " hide";
clas2 += " show";	
}




// ----------------------------------------------------------------------------------
//  var xxx="";

// if (localStorage.getItem("Kom") === null)
//  {
// xxx=null;
// let sss = [];
// let z0 = JSON.stringify(sss);
// localStorage.setItem('Kom', z0); 
//  }

// var fg=0;
// if (localStorage.getItem("Kom") != null)
//  {
//  var cur = JSON.parse(localStorage.getItem('Kom'));

// var i=0;
// fg = cur.filter(item => item.id == this.props.id);
// xxx = fg.map(cur =>{i++; return <Comment key={i} id={cur.id} name={cur.name} text={cur.text} date={cur.date} />});

//  }


var xxx="";

if (localStorage.getItem("Komenti") === null)
 {
xxx=null;
let sss = [];
let z0 = JSON.stringify(sss);
localStorage.setItem('Komenti', z0); 
 }

var fg=0;
if (localStorage.getItem("Komenti") != null)
 {
 var cur = JSON.parse(localStorage.getItem('Komenti'));

var i=0;
fg = cur.filter(item => item.id == this.props.id);
xxx = fg.map(cur =>{i++; return <Comment key={i} id={cur.id} name={cur.name} text={cur.text} date={cur.date} />});
}









// -------------------------------------------------------------------------------
var liki, disa = 0;
if (localStorage.getItem("likes") === null)
 {
liki = 0;
disa = 0;
 }

if (localStorage.getItem("likes") != null)
{
var la = localStorage.getItem("likes");
var lala = JSON.parse(la);


var prop = this.props.id;
function findObj(lal) {return lal.id==prop;}
var sasa = lala.findIndex(findObj);

if(sasa != -1)
{
liki = lala[sasa].like;
disa = lala[sasa].dis;
}

if(sasa == -1)
{
liki = 0;
disa = 0;
}




}


    return (

<div className="article">
<h1>{this.props.title}</h1>

<div id="zzz"></div>
<hr/>

<div className="articleO">

<div onClick={this.like}><i className="fa fa-thumbs-up"></i>{liki}</div>
<div><i className="fas fa-user-circle icon-1x"></i>Автор статьи: {this.props.author}</div>
<div><i className="fa fa-calendar"></i>Дата публикации: {this.props.date}</div>
<div><i className="fa fa-comment"></i>Комментариев: {fg.length}</div>
<div onClick={this.dislike}><i className="fa fa-thumbs-down"></i>{disa}</div>

</div>
<hr/>
<div id="back" onClick={() => {this.props.back(0)}}>Назад</div>
<h2>Комментарии к статье</h2>
<div id="com" onClick={this.coms} className={clas1}>Оставить комментарий</div>
<div id="com1" onClick={this.coms1} className={clas2}>Спрятать форму</div>
<div className={clas}>
<p>Ваше имя</p>
<input type="text" value={this.state.name} onChange={this.NameChange} />
<p>Ваш комментарий</p>
<textarea value={this.state.text} onChange={this.TextChange} />
<div id="sendCom" onClick={this.dateT}>Отправить</div>

</div>


{xxx}


</div>  
    )

    }    
  }

export default Article;