// calculator

const area = document.querySelector('.area strong'),
    areaInput = document.querySelector('.area-input'),
    areaLabel = document.querySelectorAll('.labels label'),
    price = document.querySelector('.object-price strong'),
    averagePrice = document.querySelector('.average-price strong'),
    setButton = document.querySelectorAll('.set-button'),
    setButtonChosen = document.querySelector('.set-button__chosen'),
    descriptions = document.querySelectorAll('.description');
    let priceStr;
    
area.innerHTML = areaLabel[0].innerHTML;
averagePrice.innerHTML = `${reverse(averagePrice.dataset.price)} тг.`;
price.innerHTML = `${reverse(parseFloat(areaLabel[0].textContent) * averagePrice.dataset.price)} тг.`;

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

setButton.forEach((button) => {
    button.addEventListener('click', () => {
        descriptions.forEach((description) => {
            description.style.display = 'none';
            if (description.dataset.pos == button.dataset.pos) {
                description.style.display = 'block';
            }


            if (button.classList.contains('set-button__chosen')) {
                button.classList.remove('set-button__chosen');
            }
            else {
                for (let i = 0; i < setButton.length; i++) {
                    setButton[i].classList.remove('set-button__chosen');
                }
                button.classList.toggle('set-button__chosen');
            }
        });
        
        if (areaInput.value == 1) {
            let a = parseFloat(areaLabel[0].textContent) * averagePrice.dataset.price;
            price.innerHTML = `${reverse(a * button.dataset.percent)} тг.`;
        }
        
    });
});

// end calculator

areaInput.addEventListener('input', () => {
    setButton.forEach((button) => {
        if (!button.classList.contains('.set-button__chosen')) {
            for (let i = 0; i < areaLabel.length; i++) {
                if (areaLabel[i].dataset.label === areaInput.value) {
                    area.innerHTML = areaLabel[i].innerHTML;
                    priceStr = (areaLabel[i].dataset.area * parseFloat(averagePrice.dataset.price));
                    
                    
                    price.innerHTML = `${reverse(priceStr)} тг.`;
                }
            }
        } else {
            for (let i = 0; i < areaLabel.length; i++) {
                if (areaLabel[i].dataset.label === areaInput.value) {
                    area.innerHTML = areaLabel[i].innerHTML;
                    let a = button.dataset.percent;
                    priceStr = (areaLabel[i].dataset.area * parseFloat(averagePrice.dataset.price * a));
                    console.log(priceStr);
                    
                    price.innerHTML = `${reverse(priceStr)} тг.`;
                }
            }
        }
    });
    
    
});

// portfolio

const portfolioFilter = document.querySelectorAll('.portfolio-filter li'),
portfolioItems = document.querySelectorAll('.portfolio-list__item');

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

