import './style.css';

function testDiv() {
    const element = document.createElement('div');

    element.classList.add("testDiv");

    return element;
}

console.log('Webpack: watch loaded...');


console.log(`Working so far..`);

document.body.appendChild(testDiv());

console.log(`Appended CSS...`);