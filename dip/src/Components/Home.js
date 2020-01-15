import React from 'react';



// import '../js/animate.css';
// import '../js/owl.carousel.min.css';
// import '../js/owl.theme.default.min.css';
// import '../js/font-awesome.min.css';
import '../style.css';
import '../js/jquery.carouFredSel-6.0.4-packed.js';
// import '../js/bootstrap4.0.0.min.js';
// import '../js/owl.carousel.min.js';







class Home extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0};    
  
//this.addNew = this.addNew.bind(this);     , {this.props.id}
 

  }

  render() {

$(document).ready(function () {

  var change_img_time = 4000,
      transition_speed = 500;

  var listItems = $("#sliderr").children('li'),
      dotItems = $('#dots').children('li'),
      listLen = listItems.length,
      current,
      changeTimeout;

  function moveTo(newIndex) {

    var i = newIndex;

    if (newIndex == 'prevv') {
        i = (current > 0) ? (current - 1) : (listLen - 1);
    }

    if (newIndex == 'nextt') {
        i = (current < listLen - 1) ? (current + 1) : 0;
    }

    dotItems.removeClass('activee')
            .eq(i).addClass('activee');

    listItems.fadeOut(transition_speed)
             .eq(i).fadeIn(transition_speed);

    current = i;

    //resets time interval if user clicks on slider dot; then begin automated slider
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(function() { moveTo('nextt'); }, change_img_time);
  };

  // Event handlers
  $("#dots li").click(function () {
    var i = $('#dots li').index(this);
    moveTo(i);
  });

  $("#prevv").click(function () {
    moveTo('prevv');
  });

  $("#next").click(function () {
    moveTo('nextt');
  });
  
  //initialize slider on load
  moveTo('nextt');
});


























$(function() {

				//	create carousel
				$('#carousel').carouFredSel({
					responsive: true,
					items: {
						width: 200,
						height: '30%',
						visible: 1
					},
					auto: {
						items: 0
					},
					prev: '#prev',
					next: '#next'
				});

				//	re-position the carousel, vertically centered
				var $elems = $('#wrapper, #prev, #next'),
					$image = $('#carousel div:first')

				$(window).bind( 'resize.example', function() {
					var height = $image.outerHeight( true );

					$elems
						.height( height )
						.css( 'marginTop', -( height/2 ) );

				}).trigger( 'resize.example' );

			});



















    $(function() {
    	var $carousel = $('#carousel1'),
    		$pager = $('#pager');
     
    	function getCenterThumb() {
    		var $visible = $pager.triggerHandler( 'currentVisible' ),
    			center = Math.floor($visible.length / 2);
    		
    		return center;
    	}
     
    	$carousel.carouFredSel({
    		responsive: true,
    		items: {
    			visible: 1,
    			width: 800,
    			height: (500/800*100) + '%'
    		},
    		scroll: {
    			fx: 'crossfade',
    			onBefore: function( data ) {
    				var src = data.items.visible.first().attr( 'src' );
    				src = src.split( '/large/' ).join( '/small/' );
     
    				$pager.trigger( 'slideTo', [ 'img[src="'+ src +'"]', -getCenterThumb() ] );
    				$pager.find( 'img' ).removeClass( 'selected' );
    			},
    			onAfter: function() {
    				$pager.find( 'img' ).eq( getCenterThumb() ).addClass( 'selected' );
    			}
    		}
    	});
    	$pager.carouFredSel({
    		width: '100%',
    		auto: false,
    		height: 120,
    		items: {
    			visible: 'odd'
    		},
    		onCreate: function() {
    			var center = getCenterThumb();
    			$pager.trigger( 'slideTo', [ -center, { duration: 0 } ] );
    			$pager.find( 'img' ).eq( center ).addClass( 'selected' );
    		}
    	});
    	$pager.find( 'img' ).click(function() {
    		var src = $(this).attr( 'src' );
    		src = src.split( '/small/' ).join( '/large/' );
    		$carousel.trigger( 'slideTo', [ 'img[src="'+ src +'"]' ] );
    	});
    });



















$(window).scroll(function(){
  // var windowWidth = $(this).width();
  // var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();
  


var secondAnimation = function(){			
   $('.pont:eq(0)').delay(400).animate({opacity:1},'slow');
   $('.pont:eq(1)').delay(600).animate({opacity:1},1000); 
   $('.pont:eq(2)').delay(800).animate({opacity:1},1000);
   $('.pont:eq(3)').delay(1000).animate({opacity:1},1000);
   $('.pont:eq(4)').delay(1200).animate({opacity:1},1000);
   $('.pont:eq(5)').delay(1400).animate({opacity:1},1000); 
   $('.pont:eq(6)').delay(1600).animate({opacity:1},1000);
   $('.pont:eq(7)').delay(1800).animate({opacity:1},1000);
   $('.pont:eq(8)').delay(2000).animate({opacity:1},1000);
   $('.pont:eq(9)').delay(2200).animate({opacity:1},1000);   
  };


// $('.counterr').each(function(){
// $(this).prop('Coounter',0).animate({
// Coounter: $(this).text()
// },{
// duration: 4000,
// easing: 'swing',
// step:function(now){
// $(this).text(Math.ceil(now));
// }

// });
// });


if(windowScrollTop>1100){
      // $('.process').css('background','tomato');
       secondAnimation();



}


});









    return (
<div>








<div className="q1">
	
		<div id="wrapper1">

			<div id="inner">
		<div id="carousel-wrapper">
			<div id="carousel1">
				<img src="src/img/house1.jpg" width="800" height="500" />
				<img src="src/img/house2a.jpg" width="800" height="500" />
				<img src="src/img/housee.jpg" width="800" height="500" />
				<img src="src/img/house4.jpg" width="800" height="500" />
				<img src="src/img/house5.jpg" width="800" height="500" />
				<img src="src/img/house6.jpg" width="800" height="500" />
				<img src="src/img/house7.jpg" width="800" height="500" />
				<img src="src/img/house8.jpg" width="800" height="500" />
				<img src="src/img/house9.jpg" width="800" height="500" />
				<img src="src/img/house10.jpg" width="800" height="500" />
				<img src="src/img/house11.jpg" width="800" height="500" />
				<img src="src/img/house12.jpg" width="800" height="500" />
				<img src="src/img/house13.jpg" width="800" height="500" />
				<img src="src/img/house14.jpg" width="800" height="500" />
				<img src="src/img/house15.jpg" width="800" height="500" />
				<img src="src/img/house16.jpg" width="800" height="500" />
			</div>
		</div>
		<div id="pager-wrapper">
			<div id="pager">
				<img src="src/img/house1.jpg" width="80" height="80" />
				<img src="src/img/house2a.jpg" width="80" height="80" />
				<img src="src/img/housee.jpg" width="80" height="80" />
				<img src="src/img/house4.jpg" width="80" height="80" />
				<img src="src/img/house5.jpg" width="80" height="80" />
				<img src="src/img/house6.jpg" width="80" height="80" />
				<img src="src/img/house7.jpg" width="80" height="80" />
				<img src="src/img/house8.jpg" width="80" height="80" />
				<img src="src/img/house9.jpg" width="80" height="80" />
				<img src="src/img/house10.jpg" width="80" height="80" />
				<img src="src/img/house11.jpg" width="80" height="80" />
				<img src="src/img/house12.jpg" width="80" height="80" />
				<img src="src/img/house13.jpg" width="80" height="80" />
				<img src="src/img/house14.jpg" width="80" height="80" />
				<img src="src/img/house15.jpg" width="80" height="80" />
				<img src="src/img/house16.jpg" width="80" height="80" />
			</div>
		</div>
	</div>
			
		</div>


</div>














<h2 className="potit">НАШИ ПРЕИМУЩЕСТВА:</h2>

<div className="ponti">	
<div className="pont">
<i className="fa fa-users"></i>
<div className="counterr">578</div>
<span>Довольных клиентов</span>
</div>
<div className="pont">
<i className="fa fa-calendar"></i>
<div className="counterr">15</div>
<span>Лет на рынке</span>
</div>

<div className="pont">
<i className="fa fa-trophy"></i>
<div className="counterr">25</div>
<span>Наград в номинации "Лучшая компания года"</span>
</div>
<div className="pont">
<i className="fa fa-globe"></i>
<div className="counterr">173</div>
<span>Офиса по горадам и странам</span>
</div>

<div className="pont">
<i className="fa fa-ban"></i>
<span>Ни одной сделки, признанной недействительной, со дня основания компании.</span>
</div>

<div className="pont">
<i className="fa fa-phone"></i>
<span>Ежедневно более 250 обращений потенциальных покупателей и продавцов.</span>
</div>

<div className="pont">
<i className="fa fa-chart-line"></i>
<span>Работаем быстро, эффективно и безопасно</span>
</div>	

<div className="pont">
<i className="fa fa-percent"></i>
<span>Постоянные скидки и акции</span>
</div>


</div>











<div className="call">	
<div><img src="src/img/phone.png"/><h2>Заказать обратный звонок</h2></div>
<div><img src="src/img/girl.png"/></div>
<div>
<p>Введите ваше имя и телефон. Специалист компании свяжется с вами, чтобы ответить на ваши вопросы.</p>	
<input type="text" placeholder="Имя"/>
<input type="text" placeholder="Телефон"/>
<button>Отправить</button>
<hr/>
<p>Или позвоните нам по телефону:</p>	
<span>+375 (29) 121-12-12</span>
</div>
</div>


<div>
	

<h1 className="teamT">Наша команда</h1>
<div className="team">
<div className="worker">
<img src="src/img/arni.png"/>
<div>Генеральный директор</div>
</div>
<div className="worker">
<img src="src/img/sli.png"/>
<div>Менеджер по продажам</div>	
</div>
<div className="worker">
<img src="src/img/stack.png"/>
<div>Охранник</div>	
</div>
<div className="worker">
<img src="src/img/norris.webp"/>
<div>Водитель</div>	
</div>
</div>




<h2 className="tittle">Отзывы наших клиентов</h2>

<div className="q">


<div id="prev"></div>

		<div id="wrapper">

			<div id="carousel">

				<div className="qo">
				<div><img src="/src/img/c6.png"/></div>
				<div><p>
"В покупке квартиры мне помогал риэлтор Максим Зайцев и юрист Влас Новик. Хочу отметить профессиональный подход. Спасибо большое за помощь и сопровождение! Буду рекомендовать именно вас!"
				</p></div>
				</div>

				<div className="qo">
				<div><img src="/src/img/c7.png"/></div>
				<div><p>
"Покупала квартиру на Скрыганова, со мной работала агент Благуш Катерина и Влас Новик. Ребята четкие, приятные, а главное, профессионалы своего дела. Осталась очень довольна и покупкой, и работой агентства! Спасибо им огромное!"
				</p></div>
				</div>

				<div className="qo">
				<div><img src="/src/img/c8.png"/></div>
				<div><p>
"Хочу выразить огромную благодарность агентству в содействии при покупке квартиры, в частности Кундалевой Алесе за ее профессиональные качества, доброжелательность, тактичность."
				</p></div>
				</div>

				<div className="qo">
				<div><img src="/src/img/c1.png"/></div>
				<div><p>
"Покупал квартиру случайным образом через данное агенство, так как в интересующем меня варианте представляло интересы продавца. Решил подписать договор во избежании каких-либо проблем. Со мной работал агент Александр Стефанович. Хотелось бы высказать ему слова благодарности за сверхпрофессиональный подход к делу. Сопровождение сделки от показа квартиры, до выдачи свидетельства о государственной регистрации. Помощь в решении проблем в процессе сделки, а также после нее. Не знаю как агенство в целом, так как впервые с ними столкнулся, но работой данного агента остался доволен."
				</p></div>
				</div>

				<div className="qo">
				<div><img src="/src/img/c2.png"/></div>
				<div><p>
"Работал с Антоном Шелабодовым из агенства, остался очень доволен! На покупку квартиры у меня ушло всего 4 встречи - на первой мы смотрели лучшие варианты в нужной мне ценовой категории, на второй - посмотрели два объекта, а за следующие две уже оформили сделку. Антон всё подробно объяснял и консультировал меня на каждом этапе. Всем рекомендую!:)"
    			</p></div>
				</div>

				<div className="qo">
				<div><img src="/src/img/c3.png"/></div>
				<div><p>
"Андрей Рыльков - это агент по недвижимости, который четко знает свои обязанности и добросовестно их выполняет! С уважением относится к своим клиентам! Для него главное, чтобы клиент остался доволен! Спасибо!!!"
				</p></div>
				</div>

				<div className="qo">
				<div><img src="/src/img/c4.png"/></div>
				<div><p>
"Выражаю свою благодарность Зайцеву Максиму за содействие в продаже квартиры. Грамотно составленное объявление с качественными фотографиями и виртуальным туром, в совокупности с правильно подобраной ценой, не заставили себя ждать. Покупатель был найден в недельный срок. Все этапы сделки прошли гладко и без заминок благодаря профессионализму риэлтора и юриста компании. Я, как клиент, остался очень доволен. Спасибо!"
				</p></div>
				</div>

				<div className="qo">
				<div><img src="/src/img/c5.png"/></div>
				<div><p>
"Хочу поблагодарить агентство недвижимости Авангард за профессионализм. Покупала свою первую квартиру и, как вы понимаете, очень переживала. Обратилась в агентство по знакомству и не пожалела ни на секунду. Уверена, что в этом агентстве все сотрудники профессионалы своего дела, но мне посчастливилось работать со специалистом по недвижимости Александром Стефановичем и юристом Власом Новиком. С этими ребятами мне просто нужно было приходить (тогда, когда мне это удобно (!), а это важно для работающего человека) и присутствовать, все делали они. Я уже убираю и готовлю к переезду СВОЮ квартиру! СПАСИБО Вам! Теперь буду советовать ваше агентство своим знакомым!"			
				</p></div>
				</div>
				
			</div>
			
		</div>
				
<div id="next"></div>
</div>





</div>




</div>

    )

    }    
  }

export default Home;