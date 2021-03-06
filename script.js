const hamburger = document.querySelector('.hamburger');
const products  = document.querySelector('.products');
const title = document.querySelector('nav h1');
const container = document.querySelector('.container');
const bg = document.querySelector('.bg1');

hamburger.addEventListener('click', toggleBurger);
window.addEventListener('scroll', translateBg);

function toggleBurger() {
    hamburger.querySelector('.line:nth-child(1)').classList.toggle('line1');
    hamburger.querySelector('.line:nth-child(2)').classList.toggle('line2');
}

function translateBg() {
  if (this.scrollY > this.innerHeight / 25){
      bg.classList.add('trans-bg');
      container.style.transform = 'translateY(-640px)';
      container.style.transition = '2s ease-in-out';
    } else {
      container.style.transform = 'translateY(0px)';
      container.style.transition = '2s ease-in-out';
      bg.classList.remove('trans-bg');
    }
}

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .fromTo('.girl1', {y: 25, x: 25}, {y: -25, x: -25, duration: 3})
    .to('.skin-text1', 3, {y: -25, x: 25}, '-=3');
    // .to()

    let scene = new ScrollMagic.Scene({
        triggerElement: '.front-cover',
        duration: '100%',
        triggerHook: 0,
    })
        .setTween(timeline)
        // .setPin('.front-cover')
        .addTo(controller)


let timeline2 = new TimelineMax();

timeline2
    .fromTo('.girl2', {y: 25, x: 25}, {y: -25, x: -25, duration: 3})
    .to('.skin-text2', 3, {y: -25, x: 25}, '-=3');

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.skin2',
        duration: '100%',
        triggerHook: 0,
    })

        .setTween(timeline2)
        // .setPin('.skin2')
        .addTo(controller)



let timeline3 = new TimelineMax();

timeline3
    .fromTo('.girl3', {y: 25, x: 25}, {y: -25, x: -25, duration: 3})
    .to('.skin-text3', 3, {y: -25, x: 25}, '-=3');

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.skin3',
        duration: '100%',
        triggerHook: 0,
    })

        .setTween(timeline3)
        // .setPin('.skin3')
        .addTo(controller)



//mouse cursor
const mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
