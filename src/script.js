const form = document.getElementById('form')

form.addEventListener('submit', getFormData)

function getFormData(e) {
    e.preventDefault()
    let name = form.querySelector('[name = "name"]')
    let phone = form.querySelector('[name = "phone"]')
    let data = {
        name: name.value,
        phone: phone.value
    }
    console.log(data)
}

const menu = document.getElementById('price-menu')
menu.addEventListener('click', priceSwitcher)

function priceSwitcher(e) {
    e.preventDefault()
    if (e.target.id === 'haircut') {

        let haircutData = {
            leftTitleFirst: 'Женская стрижка',
            leftTextFirst: 'Короткие волосы',

            leftTitleSecond: 'Мужская стрижка',
            leftTextSecond: 'Короткие волосы',

            leftTitleThird: 'Детский стиль',
            leftTextThird: 'Короткие волосы',

            leftTitleForth: 'Креативный стиль',
            leftTextForth: 'Короткие волосы',

            rightTitleFirst: 'Стрижка бороды и усов',
            rightTextFirst: 'Короткие волосы',

            rightTitleSecond: 'Эксперсс укладка',
            rightTextSecond: 'Короткие волосы',

            rightTitleThird: 'Уклака дневная',
            rightTextThird: 'Короткие волосы',

            rightTitleForth: 'Прическа вечерняя (свадебная)',
            rightTextForth: 'Короткие волосы',

            leftPriceFirst: '1200 ₽',
            leftPriceSecond: '1200 ₽',

            leftPriceThird: '1200 ₽',
            leftPriceForth: '1200 ₽',

            rightPriceFirst: '1200 ₽',
            rightPriceSecond: '1200 ₽',

            rightPriceThird: '1200 ₽',
            rightPriceForth: '3000 ₽',
        }
        setText(haircutData)

    } else if (e.target.id === 'cosmetology') {
        let cosmetologyData = {
            leftTitleFirst: 'Салициловый пилинг',
            leftTextFirst: '18+ и старше',

            leftTitleSecond: 'Миндальный пилинг',
            leftTextSecond: '18+ и старше',

            leftTitleThird: 'Ретиноловый пилинг',
            leftTextThird: '18+ и старше',

            leftTitleForth: '',
            leftTextForth: '',

            rightTitleFirst: '',
            rightTextFirst: '',

            rightTitleSecond: '',
            rightTextSecond: '',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '2900 ₽',
            leftPriceSecond: '2900 ₽',

            leftPriceThird: '2900 ₽',
            leftPriceForth: '',

            rightPriceFirst: '',
            rightPriceSecond: '',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(cosmetologyData)

    } else if (e.target.id === 'nails') {
        let nailsData = {
            leftTitleFirst: 'Маникюр',
            leftTextFirst: '60 минут',

            leftTitleSecond: 'Педикюр',
            leftTextSecond: '30 минут',

            leftTitleThird: 'SPA для рук',
            leftTextThird: '30 минут',

            leftTitleForth: 'SPA для ног',
            leftTextForth: '30 минут',

            rightTitleFirst: '',
            rightTextFirst: '',

            rightTitleSecond: '',
            rightTextSecond: '',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '1000 ₽',
            leftPriceSecond: '1300 ₽',

            leftPriceThird: '500 ₽',
            leftPriceForth: '700 ₽',

            rightPriceFirst: '',
            rightPriceSecond: '',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(nailsData)

    } else if (e.target.id === 'makeup') {
        let makeupData = {
            leftTitleFirst: 'Макияж дневной',
            leftTextFirst: '60 минут',

            leftTitleSecond: 'Макияж вечерний',
            leftTextSecond: '90 минут',

            leftTitleThird: 'Лифтинг',
            leftTextThird: '60 минут',

            leftTitleForth: 'Макияж для фотосессий',
            leftTextForth: '90 минут',

            rightTitleFirst: '',
            rightTextFirst: '',

            rightTitleSecond: '',
            rightTextSecond: '',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '1000 ₽',
            leftPriceSecond: '1500 ₽',

            leftPriceThird: '1500 ₽',
            leftPriceForth: '2000 ₽',

            rightPriceFirst: '',
            rightPriceSecond: '',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(makeupData)

    } else if (e.target.id === 'brows') {
        let browsData = {
            leftTitleFirst: 'Коррекция бровей',
            leftTextFirst: '30 минут',

            leftTitleSecond: 'Ламинирование бровей',
            leftTextSecond: '60 минут',

            leftTitleThird: 'Окрашивание бровей',
            leftTextThird: '30 минут',

            leftTitleForth: '',
            leftTextForth: '',

            rightTitleFirst: '',
            rightTextFirst: '',

            rightTitleSecond: '',
            rightTextSecond: '',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '500 ₽',
            leftPriceSecond: '600 ₽',

            leftPriceThird: '500 ₽',
            leftPriceForth: '',

            rightPriceFirst: '',
            rightPriceSecond: '',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(browsData)

    } else if (e.target.id === 'massage') {
        let massageData = {
            leftTitleFirst: 'Лимфодренажный массаж',
            leftTextFirst: '60 минут',

            leftTitleSecond: 'Лечебный массаж',
            leftTextSecond: '40 минут',

            leftTitleThird: 'Русский SPA массаж',
            leftTextThird: '120 минут',

            leftTitleForth: 'Сибирское SPA',
            leftTextForth: '120 минут',

            rightTitleFirst: 'Березовое SPA',
            rightTextFirst: '120 минут',

            rightTitleSecond: 'Вулканический уход',
            rightTextSecond: '150 минут',

            rightTitleThird: '',
            rightTextThird: '',

            rightTitleForth: '',
            rightTextForth: '',

            leftPriceFirst: '2100 ₽',
            leftPriceSecond: '1500 ₽',

            leftPriceThird: '3300 ₽',
            leftPriceForth: '4900 ₽',

            rightPriceFirst: '7500 ₽',
            rightPriceSecond: '7500 ₽',

            rightPriceThird: '',
            rightPriceForth: '',
        }

        setText(massageData)
    }

}

function setText(data) {
    let leftTitleFirst = document.getElementById('left-title-first')
    let leftTitleSecond = document.getElementById('left-title-second')
    let leftTitleThird = document.getElementById('left-title-third')
    let leftTitleForth = document.getElementById('left-title-forth')
    let leftTextFirst = document.getElementById('left-text-first')
    let leftTextSecond = document.getElementById('left-text-second')
    let leftTextThird = document.getElementById('left-text-third')
    let leftTextForth = document.getElementById('left-text-forth')
    let rightTitleFirst = document.getElementById('right-title-first')
    let rightTitleSecond = document.getElementById('right-title-second')
    let rightTitleThird = document.getElementById('right-title-third')
    let rightTitleForth = document.getElementById('right-title-forth')
    let rightTextFirst = document.getElementById('right-text-first')
    let rightTextSecond = document.getElementById('right-text-second')
    let rightTextThird = document.getElementById('right-text-third')
    let rightTextForth = document.getElementById('right-text-forth')
    let leftPriceFirst = document.getElementById('left-price-first')
    let leftPriceSecond = document.getElementById('left-price-second')
    let leftPriceThird = document.getElementById('left-price-third')
    let leftPriceForth = document.getElementById('left-price-forth')
    let rightPriceFirst = document.getElementById('right-price-first')
    let rightPriceSecond = document.getElementById('right-price-second')
    let rightPriceThird = document.getElementById('right-price-third')
    let rightPriceForth = document.getElementById('right-price-forth')

    leftTitleFirst.textContent = data.leftTitleFirst
    leftTextFirst.textContent = data.leftTextFirst

    leftTitleSecond.textContent = data.leftTitleSecond
    leftTextSecond.textContent = data.leftTextSecond

    leftTitleThird.textContent = data.leftTitleThird
    leftTextThird.textContent = data.leftTextThird

    leftTitleForth.textContent = data.leftTitleForth
    leftTextForth.textContent = data.leftTextForth

    rightTitleFirst.textContent = data.rightTitleFirst
    rightTextFirst.textContent = data.rightTextFirst

    rightTitleSecond.textContent = data.rightTitleSecond
    rightTextSecond.textContent = data.rightTextSecond

    rightTitleThird.textContent = data.rightTitleThird
    rightTextThird.textContent = data.rightTextThird

    rightTitleForth.textContent = data.rightTitleForth
    rightTextForth.textContent = data.rightTextForth

    leftPriceFirst.textContent = data.leftPriceFirst
    leftPriceSecond.textContent = data.leftPriceSecond

    leftPriceThird.textContent = data.leftPriceThird
    leftPriceForth.textContent = data.leftPriceForth

    rightPriceFirst.textContent = data.rightPriceFirst
    rightPriceSecond.textContent = data.rightPriceSecond

    rightPriceThird.textContent = data.rightPriceThird
    rightPriceForth.textContent = data.rightPriceForth
}

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const html = document.html;
const menuHamb = document.querySelector("#menu")

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    html.classList.toggle("noscroll");
}

const links = Array.from(menuHamb.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    html.classList.remove("noscroll");
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}