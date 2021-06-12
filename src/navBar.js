export default function drawNavBar(backgroundPic) {

    let navBar = document.createElement("div");
    navBar.setAttribute('id', 'navBar');
    backgroundPic.appendChild(navBar);

    let aboutNav = document.createElement("div");
    aboutNav.classList.add("navBarItem");
    aboutNav.innerHTML = "About";
    navBar.appendChild(aboutNav);

    let menuNav = document.createElement("div");
    menuNav.classList.add("navBarItem");
    menuNav.innerHTML = "Menu";
    navBar.appendChild(menuNav);

    let contactNav = document.createElement("div");
    contactNav.classList.add("navBarItem");
    contactNav.innerHTML = "Contact";
    navBar.appendChild(contactNav);

    console.log(`Successfully loaded navBar.js module`);
};
