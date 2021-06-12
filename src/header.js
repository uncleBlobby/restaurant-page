export default function drawHeader(backgroundPic) {

    let header = document.createElement("div");
    header.setAttribute('id', 'header');
    header.innerHTML = "Restaurant Name TM";
    backgroundPic.appendChild(header);

    console.log(`Successfully loaded header.js module`);
};
