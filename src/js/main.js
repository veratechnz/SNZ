// All Imports
//jQuery
$ = jQuery = require('jquery');

//slideOut Nav
var Slideout = require('slideout');

//Materialize js
var materialize = require("materialize");



//All  Custom - JS
(function(){

	// All UI updates and adjustments
	var Ui = {
	 	checkScreen:  function(){
	 		//Check window size and run internal functions. 
	 		var checkSize = $(window).width();
	 		var oldNav = 'leftNavContainer';
	 		var newBody = 'cardWrapper';

	 		//Removes static desktop side nav
			function removeNav(){
				var elem = document.getElementById(oldNav);
				elem.parentNode.removeChild(elem);
			}

			//Changes Material design class to full width
			function updateMatClass(){
				document.getElementById(newBody).className = document.getElementById(newBody).className.replace( /(?:^|\s)s10(?!\S)/g , ' s12' );
			}

			//Stretches current horizontal nav to full width after side nav removal
			function stretchHorizontalNav(){
				document.getElementById("navHorizontal").style.width = "100%";
			}

			if(checkSize <= 1024){
				removeNav();
				stretchHorizontalNav();
				updateMatClass();
			}

		}
	};

	// Monitor Screen size for new menu breakpoint:
	Ui.checkScreen();

})(); //iffe ends










