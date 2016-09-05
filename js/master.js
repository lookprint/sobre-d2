var audioElementIn = document.createElement('audio');
var audioElementOut = document.createElement('audio');
$(function(){
	$("*").tipTip({ delay: 250});
	audioElementIn.setAttribute('src', 'Swish.mp3');
	audioElementOut.setAttribute('src', 'out.mp3');
	
	$.get();	
});

$( ".circle" ).mouseover(function() {
	audioElementIn.play();
	audioElementOut.pause();
	audioElementOut.currentTime = 0
 });
 
 $( ".circle" ).mouseout(function() {
	audioElementOut.play();
	audioElementIn.pause();
	audioElementIn.currentTime = 0
 });
  
  
var spot = document.getElementById('spot');
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
 
function moverObagulho(e){
    var x = 0;
    var y = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY){
        x = e.pageX;
        y = e.pageY;
    }
    else if (e.clientX || e.clientY){
        x = e.clientX + document.body.scrollLeft;
        y = e.clientY + document.body.scrollTop;
    }
   
    if (navigator.userAgent.match('AppleWebKit')) {
        var style = '-webkit-gradient(radial, '+x+' '+y+', 0, '+x+' '+y+', 300, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.8)), color-stop(0.8, rgba(0,0,0,0)))';
    } else {
       var style = '-moz-radial-gradient('+x+'px '+y+'px 45deg,circle closest-side,transparent 0,transparent 300px,rgba(0, 0, 0, 0.8) 200px)';
		
    }
    spot.style.backgroundImage = style;	
}
 
window.onload = function() {
    window.onmousemove = moverObagulho;
}
		



