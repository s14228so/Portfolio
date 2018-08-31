function fadeOut(){
  TweenMax.to(".myBtn",1,{
    y: -100,
    opacity: 0
  });
  TweenMax.to(".intro",2,{
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
    delay:1.5
  });
  TweenMax.from(".wrapper",2,{
    ease: Power2.easeInOut
  });
  TweenMax.to(".wrapper",2,{
    delay: 2.6,
    top: "-110%",
    ease: Expo.easeInOut
  });
  TweenMax.to(".overlay",2,{
    delay: 3,
    top: "-110%",
    ease: Expo.easeInOut
  });
  TweenMax.from(".works",2,{
    delay: 3.2,
    opacity: 0,
    y:100,
    ease: Power2.easeInOut
  });

  TweenMax.to(".works",2,{
    opacity: 1,
    delay: 3.2,
    y:0,
    ease: Power2.easeInOut
  });
  $(".works").css("z-index","5");
  $(".overlay").css("pointer-events", "none" );
  $(".wrapper").css("pointer-events", "none" );
  $(".works").css("backgorund-color","pink");

}












$(document).ready(function() {
$(".animsition-overlay").animsition({
  inClass: 'overlay-slide-in-right',
  outClass: 'overlay-slide-out-right',
  inDuration: 1500,
  outDuration: 800,
  linkElement: '.animsition-link',
  // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
  loading: true,
  loadingParentElement: 'body', //animsition wrapper element
  loadingClass: 'animsition-loading',
  loadingInner: '', // e.g '<img src="loading.svg" />'
  timeout: false,
  timeoutCountdown: 5000,
  onLoadEvent: true,
  browser: [ 'animation-duration', '-webkit-animation-duration'],
  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
  overlay : true,
  overlayClass : 'animsition-overlay-slide',
  overlayParentElement : 'body',
  transition: function(url){ window.location.href = url; }
});
});







var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;
$on('mousemove', function (e) {
     xmouse = e.clientX || e.pageX;
     ymouse = e.clientY || e.pageY;
});

var ball = $('#ball');
var x = void 0,
     y = void 0,
     dx = void 0,
     dy = void 0,
     tx = 0,
     ty = 0,
     key = -1;

var followMouse = function followMouse() {
     key = requestAnimationFrame(followMouse);

     if(!x || !y) {
          x = xmouse;
          y = ymouse;
     } else {
          dx = (xmouse - x) * 0.125;
          dy = (ymouse - y) * 0.125;
          if(Math.abs(dx) + Math.abs(dy) < 0.1) {
               x = xmouse;
               y = ymouse;
          } else {
               x += dx;
               y += dy;
          }
     }
     ball.style.left = x + 'px';
     ball.style.top = y + 'px';
};
