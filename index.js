document.querySelector('body').addEventListener('mousemove', function(e) {
    const mask = document.querySelector('.mask');

    const x = e.clientX;
    const y = e.clientY;

    const maskStyle = `-webkit-mask-image: radial-gradient(circle 250px at ${x}px ${y}px, transparent, white); mask-image: radial-gradient(circle 150px at ${x}px ${y}px, transparent, white);`;
    mask.setAttribute('style', maskStyle);
});

const menuIcon = document.querySelector('.menu-icon');
    const hamburger = document.querySelector('.hamburger');

    menuIcon.addEventListener('click', () => {
        hamburger.classList.toggle('active');
    });


    // menu
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};