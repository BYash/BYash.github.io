var myimg=document.querySelector('img');
myimg.onclick=function(){
	var mySrc=myimg.getAttribute('src');
	if(mySrc==='images/firefox-icon.png')
	{
		myimg.setAttribute('src','images/mozilla.png');
	}
	else
	{
		myimg.setAttribute('src','images/firefox-icon.png');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}