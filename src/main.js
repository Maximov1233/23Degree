// calculator
const area = document.querySelector('.area strong'),
    areaInput = document.querySelector('.area-input'),
    areaLabel = document.querySelectorAll('.labels label'),
    areaDropDown = document.querySelector('.area-dropdown');
    dropDown  = areaDropDown.querySelector('.dropdown-content'),
    dropDownOptions = areaDropDown.querySelectorAll('.dropdown-area'),
    areaSelected = areaDropDown.querySelector('.area-selected'),
    price = document.querySelector('.object-price strong'),
    averagePrice = document.querySelector('.average-price strong'),
    setButton = document.querySelectorAll('.set-range .set-button'),
    setButtonChosen = document.querySelector('.set-button__chosen'),
    descriptions = document.querySelectorAll('.description'),
    variant = document.querySelector('.variant strong');

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
    for (let i = 3; i < numberArr.length; i += 4) {
        numberArr.splice(i, 0, " ");
    }
    numberArr.reverse();
    let str = numberArr.join("");
    return str;
}

if (document.body.clientWidth <= 901) {
    areaDropDown.classList.remove('hide');
}

window.addEventListener('resize', () => {
    if (document.body.clientWidth <= 901) {
        areaDropDown.classList.remove('hide');
    }
});

const calculation = () => {

            if (areaDropDown.classList.contains('hide')) {
                areaLabel.forEach((label) => {
                    if (label.dataset.label == areaInput.value) {
                        areaSize = label.dataset.area;
                        area.innerHTML = `${reverse(areaSize)} м<sup>2</sup>`;
                    }
                });
                let finalPrice = areaSize * averagePrice.dataset.price * variantValue;
                price.innerHTML = `${reverse(finalPrice)} тг.`;
            } else {
                areaSize = areaSelected.dataset.area;
                area.innerHTML = `${reverse(areaSize)} м<sup>2</sup>`;
                let finalPrice = areaSize * averagePrice.dataset.price * variantValue;
                price.innerHTML = `${reverse(finalPrice)} тг.`;
            }
    },

    refresher = (pos) => {
        variant.innerHTML = 'Без пакета';
        variantValue = 1;
        calculation();
        setButton[pos - 1].classList.remove('set-button__chosen');
        textArr = [];
    };

if (areaDropDown.classList.contains('hide')) {
    areaInput.addEventListener('input', calculation);
} else {
    dropDownOptions.forEach((option) => {
        option.addEventListener('click', () => {
            if (option.classList.contains('disabled')) return;
            for (let i = 0; i < dropDownOptions.length; i++) {
                dropDownOptions[i].classList.remove('disabled');
            }
            areaSelected.textContent = option.textContent;
            areaSelected.dataset.area = option.dataset.area;
            option.classList.add('disabled');
            dropDown.classList.add('hide');
            calculation();
        });
    });
}

setButton.forEach((button) => {
    button.addEventListener('click', () => {
        variant.innerHTML = button.textContent;
        if (!button.classList.contains('set-button__chosen')) {
            variantValue = button.dataset.percent;
            calculation();
            for (let i = 0; i < setButton.length; i++) {
                setButton[i].classList.remove('set-button__chosen');
            }
            button.classList.add('set-button__chosen');
        } else {
            refresher(button.dataset.pos);
        }
    });
});

areaSelected.addEventListener('click', () => {
    dropDown.classList.remove('hide');
});

// // setButton.forEach((button) => {
// //     button.addEventListener('click', () => {

// //         descriptions.forEach((description) => {
// //             description.style.display = 'none';
// //             if (description.dataset.pos == button.dataset.pos) {
// //                 description.style.display = 'block';
// //             }
// //         });     
// //     });
// // });

// end calculator

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
        } else if (filter.dataset.active == 4) {
            filter.classList.toggle('active-right');
        } else {
            filter.classList.toggle('active');
        }
        portfolioItems.forEach((item) => {
            item.style.display = 'none';
            if (filter.dataset.project == 'all') {
                item.style.display = '';
            } else if (filter.dataset.project == item.dataset.project) {
                item.style.display = '';
            }
        });
    });
});

// end portfolio

//slider

const sliderInput = document.querySelector('.range-slider__range'),
    slider = document.querySelector('.slider');
    console.log(slider.clientWidth);

sliderInput.max = 2300 - slider.clientWidth;

sliderInput.addEventListener('input', () => {
    slider.style.left = `${-sliderInput.value}px`;
});

// end slider