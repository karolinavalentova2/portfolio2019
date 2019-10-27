"use strict";
let portfolioButtons = null;
let lastActivePortfolioButton = 0;
// let previousStyleClass;

function doStart() {
    portfolioButtons = document.querySelectorAll('.portfolio-btn');

    portfolioButtons.forEach((button) => {
        button.onclick = () => {
            changeImgPortfolio(button);
        }
    });

    doSetStyleOnPages();
}

function doStartIndex() {
    const circle = document.getElementById('circle');

    circle.onclick = () => {
        doChangeStyle();
    };

    doSetStyleOnPages();
}

function doStartAbout() {
    doSetStyleOnPages();
}

function changeImgPortfolio(button) {
    let portfolioImg = document.getElementById('portfolioImg');
    const portfolioImgLink = document.getElementById('portfolioImgLink');

    portfolioButtons[lastActivePortfolioButton].classList.toggle('btn-active');
    button.classList.toggle('btn-active');

    switch (button.id) {
        case 'btnAnimation':{
            portfolioImg.style.backgroundImage = "url('images/portfolio1.png')";
            portfolioImgLink.href = 'http://karolinavalentova.me/animation/';
            lastActivePortfolioButton = 0;
            break;
        }
        case 'btnBrand':{
            portfolioImg.style.backgroundImage = "url('images/portfolio2.png')";
            portfolioImgLink.href = '';
            lastActivePortfolioButton = 1;
            break;
        }
        case 'btnUx':{
            portfolioImg.style.backgroundImage = "url('images/portfolio3.png')";
            portfolioImgLink.href = 'http://karolinavalentova.me/hogwarts/';
            lastActivePortfolioButton = 2;
            break;
        }
        default:
            break;
    }
}

function doChangeStyle() {
    const bodyClasses = document.body.classList;
    if(bodyClasses.contains('default')) {
        document.body.classList.toggle('yellow');
    } else if(bodyClasses.contains('yellow')) {
        document.body.classList.toggle('default');
    }

    doSaveSelectedTheme()
}

function doSetStyleOnPages() {
    const style = localStorage.getItem('STYLE');
    if(style) {
        document.body.classList.toggle('default');
        document.body.classList.add(style);
    }
}

function doSaveSelectedTheme() {
    let style;
    const bodyClasses = document.body.classList;
    if(bodyClasses.contains('yellow')) style = 'yellow';

    localStorage.setItem('STYLE', style);
}