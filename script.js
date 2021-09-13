let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let title = document.createElement('title');
title.innerHTML = 'Call to action #3';
document.head.appendChild(title);

let link1 = document.createElement('link');
link1.setAttribute('rel', 'preconnect');
link1.setAttribute('href', 'https://fonts.googleapis.com');
document.head.appendChild(link1);
let link2 = document.createElement('link');
link2.setAttribute('rel', 'preconnect');
link2.setAttribute('href', 'https://fonts.gstatic.com');
link2.setAttribute('crossorigin', '');
document.head.appendChild(link2);
let link3 = document.createElement('link');
link3.setAttribute('rel', 'stylesheet');
link3.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
document.head.appendChild(link3);

let style = document.createElement('style');
document.head.appendChild(style);

style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }
    .container {
        width: 1280px;
        height: 880px;
        margin: 0 auto;
    }
    .header {
        width: 100%;
        text-align: center;
        margin-bottom: 55px;
        margin-top: 120px;
    }
    .main-name {
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 48px;
        color: #212121;
        margin-bottom: 10px;
    }

    .main-desc {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
    }

    .main {
        width: 800px;
        height: 480px;
        display: flex;
        margin: 0 auto;
    }

    .block {
        padding-top: 80px;
        padding-bottom: 80px;
        width: 50%;
        border: 2px solid #E8E9ED;
    }

    .block2 {
        background-color: #8F75BE;
        border: 2px solid #8F75BE;
    }

    .block1 {
        border-right: none;
    }

    .block__name {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;

        color: #9FA3A7;
    }

    .block__name2 {
        color: #FFC80A;
    }

    .block__title{
        width: 55%;
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        text-align: center;
        margin: 25px auto;

        color: #212121;
    }

    .block__title2 {
        color: #fff;
    }

    .block__desc {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        width: 60%;
        margin: 0 auto;

        color: #9FA3A7;
    }

    .block__desc2 {
        color: #fff;
    }

    .block__btn {
        width: 145px;
        height: 45px;
        border-radius: 60px;
        border: 3px solid #FFC80A;
        background-color: Transparent;
        margin: 55px auto 0 auto;
        display: block;

        font-family: 'Montserrat';
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        text-transform: uppercase;
        text-align: center;
        color: #212121;

        cursor: pointer;
    }

    .block__btn2 {
        color: #fff;
    }
`;

let divContainer = document.createElement('div');
divContainer.classList.add('container');
document.body.appendChild(divContainer);

let divHeader = document.createElement('div');
divHeader.classList.add('header');
divContainer.appendChild(divHeader);

let h1Main = document.createElement('h1');
h1Main.classList.add('main-name');
h1Main.innerHTML = 'Choose Your Option';
divHeader.appendChild(h1Main);

let pMain = document.createElement('p');
pMain.classList.add('main-desc');
pMain.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
divHeader.appendChild(pMain);

let divMain = document.createElement('div');
divMain.classList.add('main');
divContainer.appendChild(divMain);

let divBlock1 = document.createElement('div');
divBlock1.classList.add('block');
divMain.appendChild(divBlock1);

let pBlockName = document.createElement('p');
pBlockName.classList.add('block__name');
pBlockName.innerHTML = 'FREELANCER';
divBlock1.appendChild(pBlockName);

let h1BlockTitle = document.createElement('h1');
h1BlockTitle.classList.add('block__title');
h1BlockTitle.innerHTML = 'Initially designed to';
divBlock1.appendChild(h1BlockTitle);

let pBlockDesc = document.createElement('p');
pBlockDesc.classList.add('block__desc');
pBlockDesc.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
divBlock1.appendChild(pBlockDesc);

let buttonBlock = document.createElement('button');
buttonBlock.classList.add('block__btn');
buttonBlock.innerHTML = 'START HERE';
divBlock1.appendChild(buttonBlock);

let divBlock1Clone = divBlock1.cloneNode(true);
divMain.appendChild(divBlock1Clone);
divBlock1Clone.classList.add('block2');

let h1blockTitle2 = divBlock1Clone.querySelector('h1');
h1blockTitle2.classList.add('block__title2');
divBlock1.classList.add('block1');

let pBlockName2 = divBlock1Clone.querySelector('.block__name');
pBlockName2.classList.add('block__name2');
pBlockName2.innerHTML = 'STUDIO';

let pBlockDesc2 = divBlock1Clone.querySelector('.block__desc');
pBlockDesc2.classList.add('block__desc2');

let buttonBlock2 = divBlock1Clone.querySelector('.block__btn');
buttonBlock2.classList.add('block__btn2');

divBlock1.classList.add('block1');



console.log(document);