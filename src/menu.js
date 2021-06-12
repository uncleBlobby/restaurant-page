export default function drawMenu(backgroundPic) {
    let menuWindow = document.createElement("div");
    menuWindow.classList.add("navWindow");
    menuWindow.setAttribute('id', 'menuWindow');
    backgroundPic.appendChild(menuWindow);

    let menuWindowHeader = document.createElement("div");
    menuWindowHeader.classList.add("windowHeader");
    menuWindowHeader.setAttribute('id', 'menuWindowHeader');
    menuWindowHeader.innerHTML = "Our Menu:";
    menuWindow.appendChild(menuWindowHeader);

    let menuWindowContent = document.createElement("div");
    menuWindowContent.classList.add("windowContent");
    menuWindowContent.setAttribute('id', 'menuWindowContent');
    menuWindowContent.innerHTML = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum";
    menuWindow.appendChild(menuWindowContent);

    console.log(`Successfully loaded menu.js module`);
};
