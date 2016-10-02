// All Imports
//jQuery
$ = jQuery = require('jquery');

//slideOut Nav
var Slideout = require('slideout');

//Materialize js
var materialize = require("materialize");



//ALL CUSTOM JS

// Created: Sep 30, 2016 
// Author: Jared Neems // Statistics New Zealand
// Pupose: Front End UI Javascript For Initial Design, User Interface, Responsive
// 		   Testing and Presentation.
// Standards: 

(function(){
	console.log('obj');
	// All UI updates and adjustments
	var Ui = {

	 	checkScreen:  function(){
	 		console.log('z');
	 		//Check window size and run internal functions. 
	 		var checkSize = $(window).width();
	 		var oldNav = 'leftNavContainer';
	 		var newBody = 'cardWrapper';

	 		//Removes static desktop side nav
			function removeNav(){
				console.log('zb');
				var elem = document.getElementById(oldNav);
				elem.parentNode.removeChild(elem);
			}

			//Changes Material design class to full width
			function updateMatClass(){
				//Change Materilize layout from 10 to 12 for responsiv mobile. Checking via regex.
				document.getElementById(newBody).className = document.getElementById(newBody).className.replace( /(?:^|\s)s10(?!\S)/g , ' s12' );
				//Trigger inclusion of mobile side nav
				mobileSideNav();
			}

			//Stretches current horizontal nav to full width after side nav removal
			function stretchHorizontalNav(){
				document.getElementById("navHorizontal").style.width = "100%";
			}

			//Activate and setup mobile side navigation
			function mobileSideNav(){
				console.log('a');
				$('.button-collapse').sideNav();
				$('.side-nav').css('display', 'block');
			}

			if(checkSize <= 1024){
				console.log('b');
				removeNav();
				stretchHorizontalNav();
				updateMatClass();
			}



		}
	};

	// Monitor Screen size for new menu breakpoint:
	Ui.checkScreen();

})(); //iffe ends










