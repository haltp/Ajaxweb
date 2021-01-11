console.log('first');
		$(document).ready(function () { //페이지 로딩 제일 마지막에 실행된다
			console.log('second');
			console.log(document.getElementById('food_1').childNodes[1].childNodes[0].nodeValue);
			console.log($('#food_1').children().eq(0).html());//eq(0): 첫번째자식
			$('#food_1>ul>li').eq(0).css('background', 'red');
			$('#food_1>ul>li').eq(1).html('blugogi');
		});
		console.log('third');
