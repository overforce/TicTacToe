$(document).ready(() => {


	$('.el').click(function() {

		if(!$(this).hasClass('el_active') && !$('.turn').hasClass('winner')){

			if($('.turn_active').hasClass('turn_cross')) $(this).addClass('cross')
			if($('.turn_active').hasClass('turn_zero')) $(this).addClass('zero')
			$('.turn').toggleClass('turn_active')

		}

		$(this).addClass('el_active')

		function check(a,b,c){

			function winner(winner,congratulations,color){

				if(
					$(`.el:nth-child(${a})`).hasClass(`${winner}`) &&
					$(`.el:nth-child(${b})`).hasClass(`${winner}`) &&
					$(`.el:nth-child(${c})`).hasClass(`${winner}`)
				) $('.turn').html(congratulations).addClass('winner').css({'color' : `${color}`})

			}

			winner('cross', 'Победа Крестиков', 'darkblue')
			winner('zero', 'Победа Ноликов', 'darkred')

		}

		if(

			$('.el:nth-child(1)').hasClass('el_active') &&
			$('.el:nth-child(2)').hasClass('el_active') &&
			$('.el:nth-child(3)').hasClass('el_active') &&
			$('.el:nth-child(4)').hasClass('el_active') &&
			$('.el:nth-child(5)').hasClass('el_active') &&
			$('.el:nth-child(6)').hasClass('el_active') &&
			$('.el:nth-child(7)').hasClass('el_active') &&
			$('.el:nth-child(8)').hasClass('el_active') &&
			$('.el:nth-child(9)').hasClass('el_active')
		) $('.turn').html('Ничья').css({'color' : 'black'})

		check(1,2,3)
		check(4,5,6)
		check(7,8,9)

		check(1,4,7)
		check(2,5,8)
		check(3,6,9)

		check(1,5,9)
		check(3,5,7)


	})

	$('.reset').click(function(){

		$('.el').removeClass().addClass('el')
		$('.turn_cross').removeClass('winner').addClass('turn_active').html('Ход Крестиков').css({'color' : 'darkblue'})
		$('.turn_zero').removeClass('winner').removeClass('turn_active').html('Ход Ноликов').css({'color' : 'darkred'})


	})


});


$(window).resize(() => {


})
