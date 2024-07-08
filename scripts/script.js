const img = document.getElementsByClassName('myPhoto')[0];
const loader = document.getElementsByClassName('loader')[0];

if (!img.complete) {
    loader.style.opacity = 1;
    img.style.opacity = 0;
}

img.addEventListener('load', function () {
    loader.style.opacity = 0;
    img.style.opacity = 1;
});

img.addEventListener('error', function () {
    loader.style.display = 'none';
    img.style.display = 'none';
    console.error('Ошибка загрузки изображения');
});

setTimeout(() => {
    if (img.complete) {
        loader.style.opacity = 0;
        img.style.opacity = 1;
    }
}, 500);





const main = document.getElementsByClassName('main')[0];
const modalContainer = document.getElementsByClassName('modalContainer')[0];
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const mask = document.getElementsByClassName('mask')[0];
const modalImg = document.querySelector('.modalImgContainer img');

const clickHandler = evt => {
    if (evt.target.classList.contains('mainItemImg')) {
        modalContainer.classList.remove('hideModalContainer');
        modalImg.src = evt.target.src;
    }
}
const closeModal = _ => {
    modalContainer.classList.add('hideModalContainer');
}

main.addEventListener('click', clickHandler);
closeBtn.addEventListener('click', closeModal);
mask.addEventListener('click', closeModal);



