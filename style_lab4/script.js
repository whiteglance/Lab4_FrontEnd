//11111111111111111 Зміна кольору елементів
const element9 = document.getElementById('element9');
const element10 = document.querySelector('#element10');

// Зміна кольору елемента з id 'element9' при кліку
element9.addEventListener('click', () => {
    element9.style.backgroundColor = element9.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
    element9.style.color = element9.style.color === 'white' ? '' : 'white';
});

// Зміна кольору елемента з id 'element10' при кліку
element10.addEventListener('click', () => {
    element10.style.backgroundColor = element10.style.backgroundColor === 'lightgreen' ? '' : 'lightgreen';
    element10.style.color = element10.style.color === 'black' ? '' : 'black';
});

//222222222222222222222222 Керування зображенням
const img = document.getElementById('cityImage');
const addButton = document.getElementById('addImage');
const increaseButton = document.getElementById('increaseSize');
const decreaseButton = document.getElementById('decreaseSize');
const removeButton = document.getElementById('removeImage');

addButton.addEventListener('click', () => {
    if (!img.parentElement) {
        document.body.appendChild(img);
    }
});

increaseButton.addEventListener('click', () => {
    img.style.width = (img.clientWidth + 20) + 'px';
});

decreaseButton.addEventListener('click', () => {
    img.style.width = (img.clientWidth - 20) + 'px';
});

removeButton.addEventListener('click', () => {
    if (img.parentElement) {
        img.remove();
    }
});
