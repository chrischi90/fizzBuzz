var input;

$(document).ready(function(){

	$('#startButton').click(function(){
		//Clear the output div
		$('.output').html('');

		//Prompt user for input, then count to that input
		input = prompt('What should I count to?');

		if(isNaN(input)){
			alert('Please enter a number');
			return false;
		} else {
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
		}
	});

});


