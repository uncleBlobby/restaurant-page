import navControl from "./navControl.js";

export default function drawNavBar(backgroundPic) {

    let navBar = document.createElement("div");
    navBar.setAttribute('id', 'navBar');
    backgroundPic.appendChild(navBar);

    let aboutNav = document.createElement("div");
    aboutNav.classList.add("navBarItem");
    aboutNav.addEventListener('click', e => {
        console.log(`clicked about`);
        navControl('about');
    });
    aboutNav.innerHTML = "About";
    navBar.appendChild(aboutNav);

    let menuNav = document.createElement("div");
    menuNav.classList.add("navBarItem");
    menuNav.addEventListener('click', e => {
        console.log('clicked menu');
        navControl('menu');
    });
    menuNav.innerHTML = "Menu";
    navBar.appendChild(menuNav);

    let contactNav = document.createElement("div");
    contactNav.classList.add("navBarItem");
    contactNav.addEventListener('click', e => {
        console.log('clicked contact');
        navControl('contact');
    });
    contactNav.innerHTML = "Contact";
    navBar.appendChild(contactNav);

    console.log(`Successfully loaded navBar.js module`);
};
