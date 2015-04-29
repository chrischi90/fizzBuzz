var input;

$(document).ready(function(){

	$('#startButton').click(function(){
		input = prompt('What should I count to?');
			for (var i = 1; i <= input; i++) {
				if (i % 3 === 0 && i % 5 === 0) {
					$('.output').append('FizzBuzz, ');
				} else if (i % 3 === 0) {
					$('.output').append('Fizz, ');
				} else if (i % 5 === 0) {
					$('.output').append('Buzz, ');
				} else {
					$('.output').append(i + ", ");
				}
			}
	});

});


