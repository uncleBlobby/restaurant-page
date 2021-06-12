export default function drawAbout(backgroundPic) {

    let aboutWindow = document.createElement("div");
    aboutWindow.classList.add("navWindow");
    aboutWindow.setAttribute('id', 'aboutWindow');
    backgroundPic.appendChild(aboutWindow);

    let aboutWindowHeader = document.createElement("div");
    aboutWindowHeader.classList.add("windowHeader");
    aboutWindowHeader.setAttribute('id', 'aboutWindowHeader');
    aboutWindowHeader.innerHTML = "About Us:";
    aboutWindow.appendChild(aboutWindowHeader);

    let aboutWindowContent = document.createElement("div");
    aboutWindowContent.classList.add("windowContent");
    aboutWindowContent.setAttribute('id', 'aboutWindowContent');
    aboutWindowContent.innerHTML = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum";
    aboutWindow.appendChild(aboutWindowContent);

    console.log(`Successfully loaded about.js module`);

    return aboutWindow;
};
