$(document).ready(() => {

	var elsArr = []

	$('.el').click(function() {

		if(!$(this).hasClass('el_active') && !$('.turn').hasClass('winner')){

			if($('.turn_active').hasClass('turn_cross')) $(this).addClass('cross')
			if($('.turn_active').hasClass('turn_zero')) $(this).addClass('zero')
			$('.turn').toggleClass('turn_active')

		}

		$(this).addClass('el_active')

		function check(a,b,c){

			function winner(winner,congratulations){

				if(
					$(`.el:nth-child(${a})`).hasClass(`${winner}`) &&
					$(`.el:nth-child(${b})`).hasClass(`${winner}`) &&
					$(`.el:nth-child(${c})`).hasClass(`${winner}`)
				) $('.turn').html(congratulations).addClass('winner')

			}

			winner('cross', 'Победа Крестиков')
			winner('zero', 'Победа Ноликов')

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
		) $('.turn').html('Ничья')

		check(1,2,3)
		check(4,5,6)
		check(7,8,9)

		check(1,4,7)
		check(2,5,8)
		check(3,6,9)

		check(1,5,9)
		check(3,5,7)

		if($('.mode_pc').hasClass('mode_active')){

			if($('.turn_zero').hasClass('turn_active')){

				if($('.el:nth-child(1)').hasClass('cross') && $('.el:nth-child(3)').hasClass('cross') && !$('.el:nth-child(2)').hasClass('el_active')){
					$('.el:nth-child(2)').click()
				}else if($('.el:nth-child(1)').hasClass('cross') && $('.el:nth-child(7)').hasClass('cross') && !$('.el:nth-child(4)').hasClass('el_active')){
					$('.el:nth-child(4)').click()
				}else if($('.el:nth-child(1)').hasClass('cross') && $('.el:nth-child(9)').hasClass('cross') && !$('.el:nth-child(5)').hasClass('el_active')){
					$('.el:nth-child(5)').click()
				}else if($('.el:nth-child(1)').hasClass('cross') && $('.el:nth-child(5)').hasClass('cross') && !$('.el:nth-child(9)').hasClass('el_active')){
					$('.el:nth-child(9)').click()
				}else if($('.el:nth-child(1)').hasClass('cross') && $('.el:nth-child(2)').hasClass('cross') && !$('.el:nth-child(3)').hasClass('el_active')){
					$('.el:nth-child(3)').click()
				}else if($('.el:nth-child(1)').hasClass('cross') && $('.el:nth-child(4)').hasClass('cross') && !$('.el:nth-child(7)').hasClass('el_active')){
					$('.el:nth-child(7)').click()
				}else if($('.el:nth-child(2)').hasClass('cross') && $('.el:nth-child(3)').hasClass('cross') && !$('.el:nth-child(1)').hasClass('el_active')){
					$('.el:nth-child(1)').click()
				}else if($('.el:nth-child(2)').hasClass('cross') && $('.el:nth-child(5)').hasClass('cross') && !$('.el:nth-child(8)').hasClass('el_active')){
					$('.el:nth-child(8)').click()
				}else if($('.el:nth-child(2)').hasClass('cross') && $('.el:nth-child(8)').hasClass('cross') && !$('.el:nth-child(5)').hasClass('el_active')){
					$('.el:nth-child(5)').click()
				}else if($('.el:nth-child(3)').hasClass('cross') && $('.el:nth-child(6)').hasClass('cross') && !$('.el:nth-child(9)').hasClass('el_active')){
					$('.el:nth-child(9)').click()
				}else if($('.el:nth-child(3)').hasClass('cross') && $('.el:nth-child(9)').hasClass('cross') && !$('.el:nth-child(6)').hasClass('el_active')){
					$('.el:nth-child(6)').click()
				}else if($('.el:nth-child(3)').hasClass('cross') && $('.el:nth-child(7)').hasClass('cross') && !$('.el:nth-child(5)').hasClass('el_active')){
					$('.el:nth-child(5)').click()
				}else if($('.el:nth-child(3)').hasClass('cross') && $('.el:nth-child(5)').hasClass('cross') && !$('.el:nth-child(7)').hasClass('el_active')){
					$('.el:nth-child(7)').click()
				}else if($('.el:nth-child(4)').hasClass('cross') && $('.el:nth-child(7)').hasClass('cross') && !$('.el:nth-child(1)').hasClass('el_active')){
					$('.el:nth-child(1)').click()
				}else if($('.el:nth-child(4)').hasClass('cross') && $('.el:nth-child(5)').hasClass('cross') && !$('.el:nth-child(6)').hasClass('el_active')){
					$('.el:nth-child(6)').click()
				}else if($('.el:nth-child(4)').hasClass('cross') && $('.el:nth-child(6)').hasClass('cross') && !$('.el:nth-child(5)').hasClass('el_active')){
					$('.el:nth-child(5)').click()
				}else if($('.el:nth-child(6)').hasClass('cross') && $('.el:nth-child(5)').hasClass('cross') && !$('.el:nth-child(4)').hasClass('el_active')){
					$('.el:nth-child(4)').click()
				}else if($('.el:nth-child(6)').hasClass('cross') && $('.el:nth-child(9)').hasClass('cross') && !$('.el:nth-child(3)').hasClass('el_active')){
					$('.el:nth-child(3)').click()
				}else if($('.el:nth-child(7)').hasClass('cross') && $('.el:nth-child(5)').hasClass('cross') && !$('.el:nth-child(3)').hasClass('el_active')){
					$('.el:nth-child(3)').click()
				}else if($('.el:nth-child(7)').hasClass('cross') && $('.el:nth-child(8)').hasClass('cross') && !$('.el:nth-child(9)').hasClass('el_active')){
					$('.el:nth-child(9)').click()
				}else if($('.el:nth-child(7)').hasClass('cross') && $('.el:nth-child(9)').hasClass('cross') && !$('.el:nth-child(8)').hasClass('el_active')){
					$('.el:nth-child(8)').click()
				}else if($('.el:nth-child(8)').hasClass('cross') && $('.el:nth-child(9)').hasClass('cross') && !$('.el:nth-child(7)').hasClass('el_active')){
					$('.el:nth-child(7)').click()
				}else if($('.el:nth-child(8)').hasClass('cross') && $('.el:nth-child(5)').hasClass('cross') && !$('.el:nth-child(2)').hasClass('el_active')){
					$('.el:nth-child(2)').click()
				}else{

					elsArr = []

					$('.el').each(function(){
						if(!$(this).hasClass('el_active')){
							elsArr.push($(this))
						}
					})

					rnd = Math.floor(Math.random()*elsArr.length)

					if(elsArr[rnd] != undefined){
						elsArr[rnd].click()
					}


				}



			}

		}

	})

	$('.reset').click(function(){

		$('.el').removeClass().addClass('el')
		$('.turn_cross').removeClass('winner').addClass('turn_active').html('Ход Крестиков')
		$('.turn_zero').removeClass('winner').removeClass('turn_active').html('Ход Ноликов')


	})

	$('.mode').click(function(){
		$('.reset').click()
		$('.mode').removeClass('mode_active')
		$(this).addClass('mode_active')
	})




});
