
// Dark mode listener
document.addEventListener('DOMContentLoaded', function() {
	const toggle = document.getElementById('toggle');
  
	// Check if the dark mode preference is saved in localStorage
	if (localStorage.getItem('darkMode') === 'true') {
	  document.body.classList.add('dark-mode');
	  toggle.checked = true;
	}
  
	toggle.addEventListener('change', function() {
	  if (toggle.checked) {
		document.body.classList.add('dark-mode');
		localStorage.setItem('darkMode', 'true');
	  } else {
		document.body.classList.remove('dark-mode');
		localStorage.setItem('darkMode', 'false');
	  }
	});
});


function getCurrentYear() {
	var currentYear = (new Date).getFullYear();

	return currentYear;
}

$(document).ready(function() {
	//$('.string').css('background', getStringColor());
	//$('#greeting').text(getGreeting());
	$('#footerDate').text(getCurrentYear());
});
  
/*
function getGreeting() {
	var greetings = ['Hola', 'Hello', 'Aloha', 'Shalom', 'Namastē', 
					'Kon\'nichiwa', 'Olá', 'Nǐ hǎo', 'Ahoj', 'Bonjour'];
	var greeting = greetings[Math.floor(Math.random() * greetings.length)];

	return greeting;
}

function getStringColor() {
	var colorArray = ['#26cad9', '#39c6b8', '#d0a52f', '#e0801f', '#080033', '#000000',
	 '#307fcf', '#42bdb5', '#798086', '#0f1e24', '#ccc0ad', '#868379', '#381a1a'];
	var color = colorArray[Math.floor(Math.random() * colorArray.length)];

	return color;
}
*/