export default function drawContact(backgroundPic) {
    let contactWindow = document.createElement("div");
    contactWindow.classList.add("navWindow");
    contactWindow.setAttribute('id', 'contactWindow');
    backgroundPic.appendChild(contactWindow);

    let contactWindowHeader = document.createElement("div");
    contactWindowHeader.classList.add("windowHeader");
    contactWindowHeader.setAttribute('id', 'contactWindowHeader');
    contactWindowHeader.innerHTML = "Contact Us:";
    contactWindow.appendChild(contactWindowHeader);

    let contactWindowContent = document.createElement("div");
    contactWindowContent.classList.add("windowContent");
    contactWindowContent.setAttribute('id', 'contactWindowContent');
    contactWindowContent.innerHTML = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum";
    contactWindow.appendChild(contactWindowContent);

    console.log(`Successfully loaded contact.js module`);
};
