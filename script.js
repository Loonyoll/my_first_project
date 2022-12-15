$(document).ready(function()
{
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:2,
		sliderToScroll:1,
		speed:1000,
		infinite:false,
		autoplay:true,
		autoplaySpeed:3000,
		pauseOnHover:true,
		pauseOnFocus:true,
		pauseOnDotsHover:true,
		draggable:false,
		/*centerMode:true,*/

		/*variableWidth:true,*/

		/*appendArrows:$('.'), - переместить стрелки 
		в собственный контейнер в index*/

		/*$('.slider').slick('set_Position');*/

		/*$('.link').click(function (event) {
			$('.slider').slick('goTo,'3);
		}); - при клике на ссылку пролистнуть слайд на 3 изо*/
	});

	$('.question').on('click',function()
	{
		$('.popup-container').css('display','flex');
	});
	$('close-icon').on('click',function() 
	{
		$('.popup-container').css('display','none')
	});
	/*responsive:
	[	{
			breadkpoint:768 ширина экрана
			settings:{
				sliderToShow:2
			}	
		}

	]*/
	/*$('.slider_big').slick({

	});*/
});