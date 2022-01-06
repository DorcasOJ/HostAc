
// Mobile open and close menu

const openMenu = document.querySelector('.menu #openMenu');
const closeMenu = document.querySelector('.menu #closeMenu');
const menuList = document.querySelector('.menu-list');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const header = document.querySelector('header');

openMenu.addEventListener('click', ()=>{
    header.classList.add('navigation')
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    menuList.style.display = "flex";
    main.style.display = "none";
    footer.style.display = "none";
 
})

closeMenu.addEventListener('click', (event)=>{
    header.classList.remove('navigation')
    event.target.style.display = "none";
    openMenu.style.display ="block";
    menuList.style.display = "none";
    main.style.display = "block";
    footer.style.display = "block";

})


// scroll effect on sessions
// reference -- https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671

const scrollSessions = document.querySelectorAll('.main-section section .left img');

const sessionInView = (ses, dividend = 1) => {
    const sessionTop = ses.getBoundingClientRect().top;
    return (
        sessionTop <= (window.innerHeight || document.documentElement.clientHeight) / 
        dividend
    );
}

const sessionOutOfView = (ses) => {
    const sessionTop = ses.getBoundingClientRect().top;
    return(
        sessionTop > (window.innerHeight || document.documentElement.clientHeight)
    );
}

const displayScrollSession = (session, even = true) => {
    if (even) {

        if ( window.innerWidth <= 480 ){
            session.classList.add('animate-session-in-slow-left-top')
        } else {
            session.classList.add('animate-session-in-slow-left');
        }
        
    }else {

        if ( window.innerWidth <= 480 ) {
            session.classList.add('animate-session-in-slow-right-top')
        } else {
            session.classList.add('animate-session-in-slow-right');
        }
    }
    session.style.opacity =1;
    
}

const hideScrollSession = (session, even =true) => {
    if (even) {
        if ( session.classList.contains('animate-session-in-slow-left-top') ){
            session.classList.remove('animate-session-in-slow-left-top')
        } else {
            session.classList.remove('animate-session-in-slow-left')
        }
        
    } else {
        if ( session.classList.contains('animate-session-in-slow-right-top')) {
            session.classList.remove('animate-session-in-slow-right-top')
        } else {
            session.classList.remove('animate-session-in-slow-right')
        }
    }
    
}

const handleScrollAnimation = () => {
    scrollSessions.forEach((ses, i) => {
        let even = i % 2 == 0
        if (sessionInView(ses, 1.05)) { //1.25
            displayScrollSession(ses, even);
        } else if (sessionOutOfView(ses)) {
            hideScrollSession(ses, even);
        }
    })
}

document.addEventListener('DOMContentLoaded', ()=>{

    const mainId = document.querySelector('main').id
    const menuOptions = document.querySelectorAll('.menu-list a')
    
    const actionMenu = (idx)=> {
        menuOptions.forEach((a, index)=> {
            if (idx !== index) {
                a.classList.remove('active')
            } else {
                a.classList.add('active')
            }
        })
    }

    switch (mainId) {
        case 'home-page':
            actionMenu(0)
            break;
        case 'descover-page':
            actionMenu(1)
            break;
        case 'wids-page':
            actionMenu(2)
            break;
        case 'contact-page':
            actionMenu(3)
            break;
        default:
            actionMenu(0)
            break;
    }

    let deviceWidth = (window.innerWidth > 0) ? window.innerWidth :  document.documentElement.clientWidth;
    if (deviceWidth > 780) {
        scrollSessions.forEach((el)=> {
            el.style.opacity = 0;
        })
    
        document.addEventListener('scroll', function () {
            handleScrollAnimation();
        })
    }
    
})


