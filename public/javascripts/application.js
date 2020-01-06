/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("continue")[0];

// When the user clicks the button, open the modal
btn.onclick = function(e) {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Select all checkboxes

$(".selectall.govuk-checkboxes__input").click(function(){
$(".individual.govuk-checkboxes__input").prop("checked",$(this).prop("checked"));
});


function myFunction() {
  var checkbox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkbox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}



// var transformVals = window.getComputedStyle(img, null).getPropertyValue("transform").match(/([-+]?[\d\.]+)/g);

var zoomInButton = document.getElementById('zoomInButton');
var zoomOutButton = document.getElementById('zoomOutButton');
var rotLeftButton = document.getElementById('rotLeftButton');
var rotRightButton = document.getElementById('rotRightButton');
var img = document.getElementById('invoiceImg');
var imgFrame = document.getElementById('imgFrame');

zoomInButton.addEventListener('click', zoom);
zoomOutButton.addEventListener('click', zoom);
rotLeftButton.addEventListener('click', rotate);
rotRightButton.addEventListener('click', rotate);

function adjustFrame(){
	imgFrame.style.overflow="hidden";
	window.setTimeout(function(){
		imgFrame.style.overflow="auto";
	},0);
}

function zoom(e){
	var buttonCalled = e.currentTarget.id;
	var transformVals = img.style["transform"].match(/([-+]?[\d\.]+)/g);
	var zoomVal = transformVals ? transformVals[0] - 0 : 1 ;
	var adjustVal = 0.1;
	var imgClass = img.className;

	if(buttonCalled === "zoomSelect"){
		zoomVal = this.value;
	}else if(buttonCalled === "zoomInButton"){
		if(zoomVal >= 2) return false;
		zoomVal = (zoomVal + adjustVal).toFixed(1);
		zoomSelect.value = zoomVal;
	}else{
		if( zoomVal <= 0.5) return false;
		adjustVal = -0.1;
		zoomVal = (zoomVal + adjustVal).toFixed(1);
		zoomSelect.value = zoomVal;
	}

	switch(imgClass) {
		case "":
				img.style.transform = "scale("+zoomVal+") rotate(0deg) translate(0, 0)";
				img.className = "";
				break;
		case "ninety":
				img.style.transform = "scale("+zoomVal+") rotate(90deg) translate(0, -100%)";
				img.className = "ninety";
				break;
		case "one-eighty":
				img.style.transform = "scale("+zoomVal+") rotate(180deg) translate(-100%,-100%)";
				img.className = "one-eighty";
				break;
		case "two-seventy":
				img.style.transform = "scale("+zoomVal+") rotate(270deg) translate(-100%, 0)";
				img.className = "two-seventy";
				break;
		default:
				img.style.transform = "scale(1) rotate(0deg) translate(0, 0)";
	}

	if(zoomVal > 1){
		adjustFrame();
	}else{
		imgFrame.style.overflow="hidden";
	}
}

function rotate(e){
	var buttonCalled = e.currentTarget.id;
	var transformVals = img.style["transform"].match(/([-+]?[\d\.]+)/g);
	var zoomVal = transformVals ? transformVals[0] - 0 : 1 ;
	var imgClass = img.className;

	if(buttonCalled === "rotRightButton"){
		switch(imgClass) {
			case "":
					img.style.transform = "scale("+zoomVal+") rotate(90deg) translate(0, -100%)";
					img.className = "ninety";
					break;
			case "ninety":
					img.style.transform = "scale("+zoomVal+") rotate(180deg) translate(-100%,-100%)";
					img.className = "one-eighty";
					break;
			case "one-eighty":
					img.style.transform = "scale("+zoomVal+") rotate(270deg) translate(-100%, 0)";
					img.className = "two-seventy";
					break;
			case "two-seventy":
					img.style.transform = "scale("+zoomVal+") rotate(0deg) translate(0, 0)";
					img.className = "";
					break;
			default:
					img.style.transform = "scale(1) rotate(0deg) translate(0, 0)";
		}
	}else{
				switch(imgClass) {
			case "":
					img.style.transform = "scale("+zoomVal+") rotate(270deg) translate(-100%, 0)";
					img.className = "two-seventy";
					break;
			case "ninety":
					img.style.transform = "scale("+zoomVal+") rotate(0deg) translate(0, 0)";
					img.className = "";
					break;
			case "one-eighty":
					img.style.transform = "scale("+zoomVal+") rotate(90deg) translate(0, -100%)";
					img.className = "ninety";
					break;
			case "two-seventy":
					img.style.transform = "scale("+zoomVal+") rotate(180deg) translate(-100%,-100%)";
					img.className = "one-eighty";
					break;
			default:
					img.style.transform = "scale(1) rotate(0deg) translate(0, 0)";
		}
	}
	adjustFrame();
}


// Popup window function
	function basicPopup(url) {
popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
	}
