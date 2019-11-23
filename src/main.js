// calculator

const area          = document.querySelector('.area strong'),
    areaInput       = document.querySelector('.area-input'),
    areaLabel       = document.querySelectorAll('.labels label'),
    price           = document.querySelector('.object-price strong'),
    averagePrice    = document.querySelector('.average-price strong'),
    setButton       = document.querySelectorAll('.set-range .set-button'),
    setButtonChosen = document.querySelector('.set-button__chosen'),
    descriptions    = document.querySelectorAll('.description'),
    confirmButton   = document.querySelector('.confirm-button'),
    variant         = document.querySelector('.variant strong');
    let priceStr,
    areaSize,
    textArr = [],
    variantValue = 1;
    
area.innerHTML = areaLabel[0].innerHTML;
averagePrice.innerHTML = `${reverse(averagePrice.dataset.price)} тг.`;
price.innerHTML = `${reverse(parseFloat(areaLabel[0].textContent) * averagePrice.dataset.price)} тг.`;
variant.innerHTML = `Без пакета`;

function reverse(number) {
    number = number.toString();
    let numberArr = [...number].reverse();
    for (let i = 3; i < numberArr.length; i+= 4) {
        numberArr.splice(i, 0, " ");
    }
    numberArr.reverse();
    let str = numberArr.join("");
    return str;
}

const calculation = () => {
    areaLabel.forEach((label) => {
        if (label.dataset.label == areaInput.value) {
            areaSize = label.dataset.area;
        }
    });
        
    let c = areaSize * averagePrice.dataset.price * variantValue;
    price.innerHTML = `${reverse(c)} тг.`;
};

areaInput.addEventListener('input', calculation);
setButton.forEach((button) => {
    
    button.addEventListener('click', () => {   
        textArr.push(button.textContent);     
        variant.innerHTML = button.textContent;
        for (let i = 0; i < setButton.length; i++) {
            setButton[i].classList.remove('set-button__chosen');
        }
        button.classList.add('set-button__chosen');
        
        if (textArr.length == 2 ) {
            if (textArr[0] == textArr[1]) {
                variant.innerHTML = 'Без пакета';
                variantValue = 1;
                calculation();
                button.classList.remove('set-button__chosen');
                textArr = [];
            }
            
        } else if (textArr.length == 3) {
            if (textArr[1] == textArr[2]) {
                variant.innerHTML = 'Без пакета';
                variantValue = 1;
                calculation();
                button.classList.remove('set-button__chosen');
                textArr = [];
            }
            
        }
        else if (textArr.length == 4) {
            if (textArr[2] == textArr[3]) {
                variant.innerHTML = 'Без пакета';
                variantValue = 1;
                calculation();
                button.classList.remove('set-button__chosen');
                textArr = [];
            } 
        }
        
        variantValue = button.dataset.percent;
        if (!button.classList.contains('set-button__chosen')) {
            variantValue = 1;
        }
        calculation();
    });
});

setButton.forEach((button) => {
    button.addEventListener('click', () => {
        
        // descriptions.forEach((description) => {
            // description.style.display = 'none';
            // if (description.dataset.pos == button.dataset.pos) {
            //     description.style.display = 'block';
            // }
        // });     
    });
});

// end calculator

// portfolio

const portfolioFilter = document.querySelectorAll('.portfolio-filter li'),
portfolioItems = document.querySelectorAll('.portfolio-list__item');
console.log(portfolioFilter);

portfolioFilter.forEach((filter) => {
    filter.addEventListener('click', () => {
        for (let i = 0; i < portfolioFilter.length; i++) {
            portfolioFilter[i].className = '';
            
        }
        if (filter.dataset.active == 1) {
            filter.classList.toggle('active-left');
        }
        else if (filter.dataset.active == 4) {
            filter.classList.toggle('active-right');
        }
        else {
            filter.classList.toggle('active');
        }
        portfolioItems.forEach((item) => {
            item.style.display = 'none';
            if (filter.dataset.project == 'all') {
                item.style.display = '';
            }
            else if (filter.dataset.project == item.dataset.project) {
                item.style.display = '';
            }
        });
    });
});

// end portfolio

// slider

const sliderInput = document.querySelector('.range-slider__range'),
slider = document.querySelector('.slider');


sliderInput.addEventListener('input', () => {
    slider.style.left = `${-sliderInput.value}px`;
});

// end slider

