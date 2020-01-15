import React from 'react';
import '../style.css';
//import PD from '../a.json';
import PD from './CatalogData';
import '../js/jquery.carouFredSel-6.0.4-packed.js';


class Detal extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {i: 0};    
  
//this.addNew = this.addNew.bind(this);     , {this.props.id}
 

  }

  render() {


let tabl = PD.filter(PD=>PD.id == this.props.id);

let d = tabl[0];

let t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16="";

if(d.Тип=="Квартира")
{
t10 = "hide";
}

if(d.Тип=="Котедж")
{
t8 = "hide";
t12 = "hide";
t15 = "hide";
}

if(d.Тип=="Дача")
{
t8 = "hide";
t12 = "hide";
t15 = "hide";
}

if(d.Тип=="Участок")
{
t3 = "hide";
t8 = "hide";
t9 = "hide";
t11 = "hide";
t12 = "hide";
t13 = "hide";
t14 = "hide";
t15 = "hide";
}






    $(function() {
    	
    	// $('#carouselD span').append('<img src="src/img/carousel_glare.png" className="glare" />');
    	// $('#thumbsD a').append('<img src="src/img/carousel_glare_small.png" className="glare" />');
     
    	$('#carouselD').carouFredSel({
    		responsive: true,
    		circular: false,
    		auto: false,
    		items: {
    			visible: 1,
    			width: 200,
    			height: '56%'
    		},
    		scroll: {
    			fx: 'directscroll'
    		}
    	});
     
    	$('#thumbsD').carouFredSel({
    		responsive: true,
    		circular: false,
    		infinite: false,
    		auto: false,
    		prev: '#prevD',
    		next: '#nextD',
    		items: {
    			visible: {
    				min: 2,
    				max: 6
    			},
    			width: 150,
    			height: '66%'
    		}
    	});
     
    	$('#thumbsD a').click(function() {
    		$('#carouselD').trigger('slideTo', '#' + this.href.split('#').pop() );
    		$('#thumbsD a').removeClass('selected');
    		$(this).addClass('selected');
    		return false;
    	});
     
    });

// ------------------------------------------------------------------------------

let price = d.Цена * 1000 + " $";
let akcii = "";
if (d.Акция==true)
akcii = "Есть";
else
akcii = "Нет";

    return (


<div className="detal">


    <div id="wrapperD">
    	<div id="carousel-wrapperD">
    		
    		<div id="carouselD">
    			<span id="p1"><img src={"/src/img/kat/" + this.props.id + "q1.jpg"} /></span>
    			<span id="p2"><img src={"/src/img/kat/" + this.props.id + "q2.jpg"} /></span>
    			<span id="p3"><img src={"/src/img/kat/" + this.props.id + "q3.jpg"} /></span>
    			<span id="p4"><img src={"/src/img/kat/" + this.props.id + "q4.jpg"} /></span>
    			<span id="p5"><img src={"/src/img/kat/" + this.props.id + "q5.jpg"} /></span>
    			<span id="p6"><img src={"/src/img/kat/" + this.props.id + "q6.jpg"} /></span>
    			<span id="p7"><img src={"/src/img/kat/" + this.props.id + "q7.jpg"} /></span>
    			<span id="p8"><img src={"/src/img/kat/" + this.props.id + "q8.jpg"} /></span>
    			<span id="p9"><img src={"/src/img/kat/" + this.props.id + "q9.jpg"} /></span>
    			<span id="p10"><img src={"/src/img/kat/" + this.props.id + "q10.jpg"} /></span>
    		</div>
    	</div>
    	<div id="thumbs-wrapperD">
    		<div id="thumbsD">
    			<a href="#p1" className="selected"><img src={"/src/img/kat/" + this.props.id + "q1.jpg"} /></a>
    			<a href="#p2"><img src={"/src/img/kat/" + this.props.id + "q2.jpg"} /></a>
    			<a href="#p3"><img src={"/src/img/kat/" + this.props.id + "q3.jpg"} /></a>
    			<a href="#p4"><img src={"/src/img/kat/" + this.props.id + "q4.jpg"} /></a>
    			<a href="#p5"><img src={"/src/img/kat/" + this.props.id + "q5.jpg"} /></a>
    			<a href="#p6"><img src={"/src/img/kat/" + this.props.id + "q6.jpg"} /></a>
    			<a href="#p7"><img src={"/src/img/kat/" + this.props.id + "q7.jpg"} /></a>
    			<a href="#p8"><img src={"/src/img/kat/" + this.props.id + "q8.jpg"}  /></a>
    			<a href="#p9"><img src={"/src/img/kat/" + this.props.id + "q9.jpg"} /></a>
    			<a href="#p10"><img src={"/src/img/kat/" + this.props.id + "q10.jpg"} /></a>
    		</div>
    		<a id="prevD" href="#"></a>
    		<a id="nextD" href="#"></a>
    	</div>
    </div>




<table className="table_blur">
<tbody>
<tr className={t0}><th colSpan = '2'>Основная информация</th></tr>
<tr className={t1}><td>Код товара</td><td>{d.id}</td></tr>
<tr className={t2}><td>Тип объекта</td><td>{d.Тип}</td></tr>
<tr className={t3}><td>Новый</td><td>{d.Новый}</td></tr>
<tr className={t4}><td>Цена</td><td>{price}</td></tr>
<tr className={t5}><td>Страна</td><td>{d.Страна}</td></tr>
<tr className={t6}><td>Город</td><td>{d.Город}</td></tr>
<tr className={t7}><td>Адрес</td><td>{d.Адрес}</td></tr>
<tr className={t8}><td>Количество комнат</td><td>{d.Комнат}</td></tr>
<tr className={t9}><td>Площадь, м<sup>2</sup></td><td>{d.Площадь}</td></tr>
<tr className={t10}><td>Площадь участка, м<sup>2</sup></td><td>{d["Площадь участка"]}</td></tr>
<tr className={t11}><td>Количество этажей в доме</td><td>{d.Этажей}</td></tr>
<tr className={t12}><td>Этаж</td><td>{d.Этаж}</td></tr>
<tr className={t13}><td>Год постройки</td><td>{d["Год постройки"]}</td></tr>
<tr className={t14}><td>Тип стен</td><td>{d["Тип стен"]}</td></tr>
<tr className={t15}><td>Наличие балкона</td><td>{d.Балкон}</td></tr>
<tr className={t16}><td>Акция</td><td>{akcii}</td></tr>
</tbody>	
</table>
<h4>Описание</h4>
<div className="description">{d.Описание}</div>


</div>

    )

    }    
  }

export default Detal;