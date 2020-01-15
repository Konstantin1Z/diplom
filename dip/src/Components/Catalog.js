import React from 'react';
import '../style.css';
//import PD from '../a.json';
import CD from './CatalogData';
import Item from "./Item";
import Detal from "./Detal";
import {Link} from "react-router-dom";
import {Route, IndexRoute, Switch} from "react-router-dom";

class Catalog extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {tip: "Все объекты", room: 0, coast: 0, stage: 0, stages: 0, s: 0, ss: 0, filtr: 0, val1: 0, val2: 1000000, val3: 0, val4: 1000, val5: 0, val6: 1000, sort: "up", typeSort: 0, view: 0, id: 0}; 

	this.handleChange1 = this.handleChange1.bind(this);	
	this.roomn = this.roomn.bind(this);
this.ido = this.ido.bind(this);
this.stageChange = this.stageChange.bind(this);	
this.stagesChange = this.stagesChange.bind(this);	

	this.Change1 = this.Change1.bind(this);
	this.Change2 = this.Change2.bind(this);
	this.Change3 = this.Change3.bind(this);
	this.Change4 = this.Change4.bind(this);
	this.Change5 = this.Change5.bind(this);
	this.Change6 = this.Change6.bind(this);

// this.viewChange = this.viewChange.bind(this);

this.vidT = this.vidT.bind(this);
this.vidR = this.vidR.bind(this);



this.sorting = this.sorting.bind(this);
this.sortUp = this.sortUp.bind(this);
this.sortDown = this.sortDown.bind(this);

this.res = this.res.bind(this);
this.filtr = this.filtr.bind(this);
  }


// 

handleChange1(event) 
 {this.setState({tip: event.target.value});}
roomn(event) 
 {this.setState({room: event.target.value});}
stageChange(event) 
 {this.setState({stage: event.target.value});}
stagesChange(event) 
 {this.setState({stages: event.target.value});}



Change1(event) 
{
const re = /^[0-9\b.+]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({val1: event.target.value}); 
}
Change2(event) 
{
const re = /^[0-9\b.+]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({val2: event.target.value}); 
}
Change3(event) 
{
const re = /^[0-9\b.+]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({val3: event.target.value}); 
}
Change4(event) 
{
const re = /^[0-9\b.+]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({val4: event.target.value}); 
}
Change5(event) 
{
const re = /^[0-9\b.+]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({val5: event.target.value}); 
}
Change6(event) 
{
const re = /^[0-9\b.+]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({val6: event.target.value}); 
}

sorting(event)
{this.setState({typeSort: event.target.value});}
sortUp(event)
{this.setState({sort: event.target.value});}
sortDown(event)
{this.setState({sort: event.target.value});}

filtr(event) 
 { this.setState({filtr: 1});}
res(event) 
 { this.setState({tip: "Все объекты", sort: "", typeSort: 0, filtr: 0}); }

// viewChange(event)
// {this.setState({view: event.target.value});}

vidT(){this.setState({view: 0});}
vidR(){this.setState({view: 1});}


getId = (valueId) => {this.setState({ id: valueId });}


ido()
{
 this.setState({id: 0});
}



  render() {

// if(this.state.tip=="Все объекты") 
// 	{
// 		this.res;
// 	}

var f=0;
var fi,fa=0;

// PD.map(PD => <Item key={PD.id} tip={PD.Тип} />);   
// let fg = cur.filter(item => item.fav == "Избранный");

f = CD.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция} />);  
fa=f;
if(this.state.filtr==1)
{


	if(this.state.tip=="Квартира")
{

		if (this.state.room !=0 && this.state.stage ==0 && this.state.stages ==0 ) 
		{
		 fi=CD.filter(item => item.Тип == "Квартира" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 &&  item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item.Комнат == this.state.room);	
		}
		if (this.state.room !=0 && this.state.stage !=0 && this.state.stages ==0) 
		{
		 fi=CD.filter(item => item.Тип == "Квартира" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 &&  item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item.Комнат == this.state.room && item.Этаж == this.state.stage);	
		}
		if (this.state.room !=0 && this.state.stage !=0 && this.state.stages !=0) 
		{
		 fi=CD.filter(item => item.Тип == "Квартира" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 &&  item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item.Комнат == this.state.room && item.Этаж == this.state.stage && item.Этажей == this.state.stages);	
		}
		if (this.state.room !=0 && this.state.stage ==0 && this.state.stages !=0) 
		{
		 fi=CD.filter(item => item.Тип == "Квартира" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 &&  item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item.Комнат == this.state.room && item.Этажей == this.state.stages);	
		}
		if (this.state.room ==0 && this.state.stage !=0 && this.state.stages ==0) 
		{
		 fi=CD.filter(item => item.Тип == "Квартира" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 &&  item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item.Этаж == this.state.stage);	
		}
		if (this.state.room ==0 && this.state.stage ==0 && this.state.stages !=0) 
		{
		 fi=CD.filter(item => item.Тип == "Квартира" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 &&  item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item.Этажей == this.state.stages);	
		}
		if (this.state.room ==0 && this.state.stage ==0 && this.state.stages ==0) 
		{
		 fi=CD.filter(item => item.Тип == "Квартира" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 &&  item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4);	
		}

f=fi.map(PD => <Item key={PD.id} id={PD.id} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);


}


if(this.state.tip=="Котедж")
{

		if (this.state.stages !=0) 
		{
		 fi=CD.filter(item => item.Тип == "Котедж" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 && item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item["Площадь участка"] >= this.state.val5 && item["Площадь участка"] <= this.state.val6 && item.Этажей == this.state.stages);	
		}
		else
		{
		fi=CD.filter(item => item.Тип == "Котедж" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 && item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item["Площадь участка"] >= this.state.val5 && item["Площадь участка"] <= this.state.val6);	
		}

f=fi.map(PD => <Item key={PD.id} id={PD.id} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view}  country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);

}



if(this.state.tip=="Дача")
{

		if (this.state.stages !=0) 
		{
		 fi=CD.filter(item => item.Тип == "Дача" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 && item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item["Площадь участка"] >= this.state.val5 && item["Площадь участка"] <= this.state.val6 && item.Этажей == this.state.stages);	
		}
		else
		{
		fi=CD.filter(item => item.Тип == "Дача" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 && item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item["Площадь участка"] >= this.state.val5 && item["Площадь участка"] <= this.state.val6);	
		}

f=fi.map(PD => <Item key={PD.id} id={PD.id} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view}  country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);

}


if(this.state.tip=="Участок")
{
fi=CD.filter(item => item.Тип == "Участок" && item.Цена >= this.state.val1 && item.Цена <= this.state.val2 && item.Площадь >= this.state.val3 && item.Площадь <= this.state.val4 && item["Площадь участка"] >= this.state.val5 && item["Площадь участка"] <= this.state.val6);	
		
f=fi.map(PD => <Item key={PD.id} id={PD.id} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view}  country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
}


if(this.state.tip=="Все объекты")
{
f = CD.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция} />);  
fa=f;
// this.setState({filtr: 0});

}





//sort
if(this.state.typeSort=="0" && this.state.sort=="up")
{
fa=fi.sort(function(a, b){var nameA=a.Тип.toLowerCase(), nameB=b.Тип.toLowerCase();
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0; });		
f=fa.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
}

if(this.state.typeSort=="0" && this.state.sort=="down")
{
fa=fi.sort(function(a, b){var nameA=a.Тип.toLowerCase(), nameB=b.Тип.toLowerCase();
	if (nameA > nameB) return -1;
	if (nameA < nameB) return 1;
	return 0; });		
f=fa.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
}

if(this.state.typeSort=="1" && this.state.sort=="up")
{
fa=fi.sort(function(a, b){var nameA=a.Цена, nameB=b.Цена;
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0; });		
f=fa.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
}

if(this.state.typeSort=="1" && this.state.sort=="down")
{
fa=fi.sort(function(a, b){var nameA=a.Цена, nameB=b.Цена;
	if (nameA > nameB) return -1;
	if (nameA < nameB) return 1;
	return 0; });		
f=fa.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
}


}//end if filtr=1


if(this.state.filtr==0)
{

if(this.state.tip=="Все объекты")
{
f=CD.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
fa=f;
}




if(this.state.typeSort=="0" && this.state.sort=="up")
{
fa=CD.sort(function(a, b){var nameA=a.Тип.toLowerCase(), nameB=b.Тип.toLowerCase();
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0; });		
f=fa.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
}

if(this.state.typeSort=="0" && this.state.sort=="down")
{
fa=CD.sort(function(a, b){var nameA=a.Тип.toLowerCase(), nameB=b.Тип.toLowerCase();
	if (nameA > nameB) return -1;
	if (nameA < nameB) return 1;
	return 0; });		
f=fa.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
}

if(this.state.typeSort=="1" && this.state.sort=="up")
{
fa=CD.sort(function(a, b){var nameA=a.Цена, nameB=b.Цена;
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0; });		
f=fa.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
}

if(this.state.typeSort=="1" && this.state.sort=="down")
{
fa=CD.sort(function(a, b){var nameA=a.Цена, nameB=b.Цена;
	if (nameA > nameB) return -1;
	if (nameA < nameB) return 1;
	return 0; });		
f=fa.map(PD => <Item key={PD.id} id={PD.id} getId={this.getId} tip={PD.Тип} room={PD.Комнат} stage={PD.Этаж} stages={PD.Этажей} coast={PD.Цена} s={PD.Площадь} ss={PD["Площадь участка"]} pl={this.state.view} country={PD.Страна} city={PD.Город}  adres={PD.Адрес} accii={PD.Акция}/>);
}


}//end if filtr=0



    
let activ="", activ1="";
if(this.state.view==0)
{
activ ="activ";
activ1 ="deactiv";
}
else
{
activ ="deactiv";
activ1 ="activ";
}




var stil1,stil2,stil3,stil4,stil5,stil6,stil7;

if(this.state.tip=="Все объекты")
{
	stil1 ="hide";
	stil2 ="hide";
	stil3 ="hide";
	stil4 ="hide";
	stil5 ="hide";
	stil6 ="hide";
	stil7 ="hide";
}


if(this.state.tip=="Квартира")
{
	stil1 ="show";
	stil2 ="show";
	stil3 ="show";
	stil4 ="show";
	stil5 ="show";
	stil6 ="hide";
stil7 ="show";
}
if(this.state.tip=="Котедж")
{
	stil1 ="hide";
	stil2 ="hide";
	stil3 ="show";
	stil4 ="show";
	stil5 ="show";
	stil6 ="show";
stil7 ="show";
}
if(this.state.tip=="Дача")
{
	stil1 ="hide";
	stil2 ="hide";
	stil3 ="hide";
	stil4 ="show";
	stil5 ="show";
	stil6 ="show";
stil7 ="show";
}
if(this.state.tip=="Участок")
{
	stil1 ="hide";
	stil2 ="hide";
	stil3 ="hide";
	stil4 ="show";
	stil5 ="hide";
	stil6 ="show";
stil7 ="show";
}


let filtrclass = "filtr";
let xxxClass = "xxx";

if(this.state.id != 0)
{	
filtrclass = "filtr hide";
xxxClass = "xxx hide";
}
else
{
filtrclass = "filtr flex";
xxxClass = "xxx flex";
}

let linkkk = "/Catalog/" + this.state.id;


    return (

<div className="catalog">
<h1>Каталог</h1> 

<Route path={linkkk} render={()=><Detal id={this.state.id}/>} />

<div className={filtrclass}>

<div className="sorting">

<div id="object">
<p>Тип объекта</p>
<select onChange={this.handleChange1} ref="tip" className="select">
<option value="Все объекты">Все объекты</option>
<option value="Квартира">Квартира</option>
<option value="Котедж">Котедж</option>
<option value="Дача">Дача</option>
<option value="Участок">Участок</option>
</select>	
</div>

<div id="room" className={stil1}>
<p>Количество комнат</p>
<form>
  <div>
    <input className="ch_rom" type="radio" id="room1"
     name="contact" value="1" onChange={this.roomn}/>
    <label>1</label>

    <input className="ch_rom" type="radio" id="room2"
     name="contact" value="2" onChange={this.roomn}/>
    <label>2</label>

    <input className="ch_rom" type="radio" id="room3"
     name="contact" value="3" onChange={this.roomn}/>
    <label>3</label>

    <input className="ch_rom" type="radio" id="roomAll"
     name="contact" value="0" onChange={this.roomn}/>
    <label>Все</label>
  </div>
</form>
</div>

<div id="stage" className={stil2}>
<p>Этаж</p>
<select onChange={this.stageChange} className="select">
<option value="0">Любой</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>


</select>
</div>

<div id="stages" className={stil3}>
<p>Этажей в доме</p>
<select onChange={this.stagesChange} className="select">
<option value="0">Не важно</option>
<option value="2">2</option>
<option value="4">4</option>
<option value="9">9</option>
<option value="19">19</option>
</select>
</div>

<div id="coast" className={stil4}>
<p>Стоимость</p>
<label>min</label><input type="text" value="0" value={this.state.val1} onChange={this.Change1}/>
<label>max</label><input type="text" value="1000000" value={this.state.val2} onChange={this.Change2}/>
</div>

<div id="s" className={stil5}>
<p>Площадь помещения, м<sup>2</sup></p>
<label>min</label><input type="text" value="0" value={this.state.val3} onChange={this.Change3}/>
<label>max</label><input type="text" value="1000" value={this.state.val4} onChange={this.Change4}/>
</div>

<div id="ss" className={stil6}>
<p>Площадь участка, соток</p>
<label>min</label><input type="text" value="0" value={this.state.val5} onChange={this.Change5}/>
<label>max</label><input type="text" value="1000" value={this.state.val6} onChange={this.Change6}/>
</div>



<div id="enter" className={stil7} onClick={this.filtr}>Показать</div>

<div id="reset" className={stil7} onClick={this.res}>Сбросить<br/>фильтр</div>

</div>

<div className = "sortIview">
<div id="view">	
<p>Вид</p>
{/*<select onChange={this.viewChange}>
<option value="0">Плитки</option>
<option value="1">Таблица</option>
</select>


<i class="fa fa-th-list"></i>
<i class="fa fa-list"></i>*/}
<div id="table" onClick={this.vidT} className={activ}><i className="fa fa-table"></i></div>
<div id="rows" onClick={this.vidR} className={activ1}><i className="fa fa-list-ul"></i></div>

</div>


<div id="sort">
<p>Сортировка</p>
<select onChange={this.sorting}>
<option value="0">По типу объекта</option>
<option value="1">По цене</option>
</select>	

<form>
  <div>
    <input className="ch_rom" type="radio" id="room1"
     name="contact" value="up" onChange={this.sortUp}/>
    <label>по убыванию</label>
<br/>
    <input className="ch_rom" type="radio" id="room2"
     name="contact" value="down" onChange={this.sortDown}/>
    <label>по возростанию</label>
  </div>
</form>
</div>

</div>




</div>

<div className={xxxClass}>

{f}

</div>

{/*detail*/}

<div onClick={this.ido}><Link className="linkCat" to="/Catalog">Back</Link></div>



</div>
    )

    }    
  }

export default Catalog;