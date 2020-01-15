import React from 'react';
import '../style.css';
import '../js/jquery.carouFredSel-6.0.4-packed.js';
import Item from "./Item";
//import PD from '../a.json';
//import At from '../b.json';
import AD from './ArticleData.js';
import CD from './CatalogData.js';
import PreArticle from "./PreArticle";

class RightSide extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0};    
  
//this.addNew = this.addNew.bind(this);     , {this.props.id}
 

  }

  render() {


//     $(function() {
     
//     	$('#carousel2 ul').carouFredSel({

// responsive: true,
// 					items: {
// 						width: 200,
// 						height: '100%',
// 						visible: 1
// 					},
// 					auto: {
// 						items: 0
// 					},


//     		prev: '#prev2',
//     		next: '#next2',
//     		pagination: "#pager2",
//     		scroll: 1000
//     	});
    	
//     });




var color="";
if (localStorage.getItem("colors") != null)
{
var h = localStorage.getItem("colors");
color = JSON.parse(h);
}

let col = {backgroundColor: color};



    return (

<aside className="right" style={{...col}}>

    {/*<div id="wrapper2">
    	<div id="carousel2">
    		<ul>
    			<li><img src="src/img/c1.png" alt="" /><span>Image1</span></li>
    			<li><img src="src/img/c2.png" alt="" /><span>Image2</span></li>
    			<li><img src="src/img/c3.png" alt="" /><span>Image3</span></li>
    			<li><img src="src/img/c4.png" alt="" /><span>Image4</span></li>
    			<li><img src="src/img/c5.png" alt="" /><span>Image5</span></li>
    			<li><img src="src/img/c6.png" alt="" /><span>Image6</span></li>					
    		</ul>
    		
    		<a id="prev2" className="prev2" href="#">&lt;</a>
    		<a id="next2" className="next2" href="#">&gt;</a>
    		
    	</div>
    </div>*/}
    

<h2>Новинка</h2>
<div className="rnew">
<Item id={CD[2].id} tip={CD[2].Тип} room={CD[2].Комнат} stage={CD[2].Этаж} stages={CD[2].Этажей} coast={CD[2].Цена} s={CD[2].Площадь} ss={CD[2]["Площадь участка"]} country={CD[2].Страна} city={CD[2].Город}  adres={CD[2].Адрес} accii={CD[2].Акция} />
</div>

<h2>Товар по акции</h2>
<div className="rakc">
<Item id={CD[1].id} tip={CD[1].Тип} room={CD[1].Комнат} stage={CD[1].Этаж} stages={CD[1].Этажей} coast={CD[1].Цена} s={CD[1].Площадь} ss={CD[1]["Площадь участка"]} country={CD[1].Страна} city={CD[1].Город}  adres={CD[1].Адрес} accii={CD[1].Акция} />
</div>

<h2>Свежая статья</h2>
<div className="rfreshart">
 <PreArticle id={AD[1].id} title={AD[1].title} author={AD[1].autor} date={AD[1].date} imgmin={AD[1].imgmin} pretext={AD[1].pretext}/>   
</div>





</aside>  
    )

    }    
  }

export default RightSide;