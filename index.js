/* light */
/* ns: white ns2:#fffdd0 tQs:rgba(0,0,0,0.4) dTc: rgb(201,196,168), linear-gradient(90deg, rgba(0,203,255,1) 3%, rgba(0,255,136,1) 52%, rgba(67,255,104,1) 94%) */

/* Dark */
/* bg1 : 1c1b29  bg2 : 2f3037  ns: #091021  ns2:#252839  dTc: rgb(89, 89, 89) tQs: rgba(255,255,255,0.4)*/


//Getting all the variables
const root_theme = document.querySelector(':root');
const theme_switcher = document.getElementById('checkbox-theme-switcher');
const menu = document.querySelector('#mobile-nav-menu');
const hamburger = document.querySelector('.hamburger');

// Theme Switcher Logic
theme_switcher.addEventListener('click', (e) => {
    console.log('click')
    // light theme
    if (e.target.checked) {
        root_theme.style.setProperty('--shade','rgb(45, 45, 45)');
        root_theme.style.setProperty('--designTextColor','linear-gradient(90deg, rgba(0,203,255,1) 3%, rgba(0,255,136,1) 52%, rgba(67,255,104,1) 94%)');
        root_theme.style.setProperty('--BackgroundShade1','#fff');
        root_theme.style.setProperty('--BackgroundShade2','#fff');
        root_theme.style.setProperty('--newShade','#fff');
        root_theme.style.setProperty('--newShade2','#fffdd0');
        root_theme.style.setProperty('--transparentQuoteShade','rgba(0,0,0,0.4)');
    }
    // dark theme
    else {
        root_theme.style.setProperty('--shade','#fff');
        root_theme.style.setProperty('--designTextColor','rgb(89, 89, 89)');
        root_theme.style.setProperty('--BackgroundShade1','#1c1b29 ');
        root_theme.style.setProperty('--BackgroundShade2','#2f3037');
        root_theme.style.setProperty('--newShade','#091021');
        root_theme.style.setProperty('--newShade2','#252839');
        root_theme.style.setProperty('--transparentQuoteShade','rgba(255,255,255,0.4)');
    }
})

hamburger.addEventListener('click', () => {
    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
        menu.classList.add('show');
        hamburger.querySelector('img').src = 'images/cross.png';    
    } else {
        menu.classList.remove('show');
        menu.classList.add('hide');
        hamburger.querySelector('img').src = 'images/menu.png';
    }  
})
