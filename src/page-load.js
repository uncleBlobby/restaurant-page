import drawAbout from './about.js'; 
import drawContact from './contact.js';
import drawHeader from './header.js';
import drawMenu from './menu.js';
import drawNavBar from './navBar.js';
export default function pageLoad() {

    let content = document.getElementById("content");
    let backgroundPic = document.createElement("div");
    backgroundPic.classList.add("backgroundPic");
    content.appendChild(backgroundPic);

    //draw Header
    drawHeader(backgroundPic);

    //draw navBar
    drawNavBar(backgroundPic);

    //draw about section (hidden by default)
    drawAbout(backgroundPic);

    //draw menu section (hidden by default)
    drawMenu(backgroundPic);

    //draw contact section (hidden by default)
    drawContact(backgroundPic);

    console.log(`Successfully imported pageLoad file...`);
};
