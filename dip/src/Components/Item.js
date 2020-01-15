import React from 'react';
import '../style.css';
import {Link} from "react-router-dom";
class Item extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {valueId: 0};      
 
  }



  render() {

// this.setState({valueId: this.props.id});

let className="show";

let className1="child";


let price = this.props.coast * 1000;
let discount = price - (price * 5 / 100);
let akcii = "", prises=<div className={className}>{"Стоимость: " + price +" $"} </div>;
if(this.props.accii==true)
{
akcii = <div className="rect"><span>.....</span><b>-5%</b></div>;
prises=<div className={className}><span style={{"textDecoration": "line-through"}}>{"Стоимость: " + price +" $"}</span><br/><span>{"Стоимость: " + discount +" $"}</span></div>;	
}

else
{
akcii = "";
prises=<div className={className}>{"Стоимость: " + price +" $"} </div>;	
}


// -------------------------------------

//<div className={className}>{"Стоимость: " + price +" $"} </div>












//--------------------------------------
let rooms = "";
if(this.props.tip=="Квартира")
rooms = <div><i className="fa fa-bed"></i>{this.props.room}</div>;
else
rooms = "";
// ----------------------------------------
let bathrooms = "";
if(this.props.tip=="Квартира")
bathrooms = <div><i className="fa fa-bath"></i>1</div>;
else if(this.props.tip=="Котедж")
bathrooms = <div><i className="fa fa-bath"></i>2</div>;
else	
bathrooms = "";
// ---------------------------------------
let inarea ="";
if(this.props.tip=="Квартира" || this.props.tip=="Котедж")
inarea = <div><i className="fa fa-home"></i>{this.props.s} м<sup>2</sup></div>;
else
inarea = "";
// -----------------------------------------
let outarea ="";
if(this.props.tip=="Дача" || this.props.tip=="Котедж" || this.props.tip=="Участок")
outarea = <div><i className="fa fa-arrows-alt"></i>{this.props.ss} м<sup>2</sup></div>;
else
outarea = "";



if(this.props.pl==1)
className1 +=" row";
if(this.props.pl==0)
className1 +=" plit";
  


let linkk ="/Catalog/" + this.props.id;
    return (

<div className={className1}>
{/*<div className={t1}>{this.props.tip}</div>*/}
<div className={className}><img src={"src/img/kat/" + this.props.id + "q1.jpg"}/></div>
<div className={className}>{this.props.tip}</div>

<div className={className}>{this.props.adres}</div>
<div className={className}>{this.props.city + ", " + this.props.country}</div>


{prises}
{/*<div className={className}>{"Стоимость: " + price +" $"} </div><div className={t4}>{"Количество комнат: " + this.props.room}</div>
<div className={t5}>{"Этаж: " + this.props.stage}</div>
<div className={t6}>{"Всего этажей: " + this.props.stages}</div>
<div className={t7}>{"Площадь помещения: " + this.props.s}</div>
<div className={t8}>{"Площадь участка: " + this.props.ss}</div>
<div className={t9}>{"id: " + this.props.id}</div>fas fa-vector-square<div><i className="fa fa-bed"></i></div>*/}

<div className={className}>
	

{inarea}
{rooms}
{bathrooms}
{outarea}
</div>

<div onClick={() => {this.props.getId(this.props.id)}}><Link className="linkCat" to={linkk}>Подробнее</Link></div>{/*<div className="rect">Aкция</div>*/}

{akcii}

</div>  

    )

    }    
  }

export default Item;