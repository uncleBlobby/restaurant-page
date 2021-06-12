export default function navControl(activeWindow) {
    if(activeWindow == 'about') {
        aboutWindow.style.display = "block";
        menuWindow.style.display = "none";
        contactWindow.style.display = "none";
    }
    if(activeWindow == 'menu') {
        aboutWindow.style.display = "none";
        menuWindow.style.display = "block";
        contactWindow.style.display = "none";
    }
    if(activeWindow == 'contact') {
        aboutWindow.style.display = "none";
        menuWindow.style.display = "none";
        contactWindow.style.display = "block";
    }
}