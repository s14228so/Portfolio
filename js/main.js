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

}
















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
