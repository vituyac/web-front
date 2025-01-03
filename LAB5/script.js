function loadData(){
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        displayCards(cardsData);
    }, 300);
}

let sortOption = 'По умолчанию';

function selectCategory(option) {
    const currentActive = document.getElementById('this');
    currentActive.removeAttribute('id');

    const divs = document.querySelectorAll('div');
    const targetDiv = Array.from(divs).find(div => {
        const link = div.querySelector('a');
        return link && link.innerText.trim() === option;
    });

    targetDiv.id = "this";
    sortCards(option, sortOption);
}

function selectOption(option) {
    sortOption = option;

    const dropdownButton = document.getElementById('dropdownButton');
    const selectedOption = document.getElementById('selectedOption');
    if (option === 'По умолчанию') selectedOption.innerText = 'По умолчанию';
    if (option === 'Сначала новые') selectedOption.innerText = 'Сначала новые';
    if (option === 'Сначала старые') selectedOption.innerText = 'Сначала старые';
    document.getElementById("dropdownMenu").classList.remove("show");
    const currentCategory = document.querySelector('#this a').innerText.trim();
    sortCards(currentCategory, sortOption);
}

function sortCards(category, timeSort) {
    let sortedCards = [...cardsData];

    if (category !== 'Все новости') {
        sortedCards = cardsData.filter(card => card.tag === category);
    }

    if (timeSort === 'Сначала новые') {
        sortedCards.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (timeSort === 'Сначала старые') {
        sortedCards.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    displayCards(sortedCards);
}


const cardsData = [
    { tag: 'Общество', date: '2024-11-29T17:00:00', img: 'media/card1.png', title: 'Изготовленный Зурабом Церетели памятник Тихону Хренникову открыли в Ельце', description: 'Новая достопримечательность появилась в Ельце. Здесь открыли памятник композитору Тихону Хренникову. В этом году исполняется 110 лет со дня его рождения. Двухтонная скульптура полностью из бронзы. Её создал народный художник СССР и России, президент Российской академии художеств Зураб Церетели. Это первая его работа, установленная в Липецкой области.'},
    { tag: 'Спорт', date: '2024-11-29T16:06:00', img: 'media/card2.png', title: 'Липецк признан беговой столицей России 2023 года', description: 'Липецк признан беговой столицей России 2023 года по итогам полумарафона «Забег.рф». В Липецке было 4000 участников забега, которые показали лучший результат в России, набрав 29,34 итоговых зачетных балла. Данный показатель высчитывался исходя из следующих показателей: средней дистанции, преодоленной всеми участниками субъекта, соотношению участников «Забега.рф» к его населению, а также по средней скорости бега. На втором месте оказался Магадан, он набрал 27,45 балла, на третьем — Санкт-Петербург, у него 21,55 балла'},
    { tag: 'Экономика', date: '2024-11-29T13:00:00', img: 'media/card3.png', title: 'Электрокар EVOLUTE из Липецкой области признан электромобильным брендом № 1 в России', description: 'Электрокар под маркой EVOLUTE вновь подтвердил звание «Электромобиля № 1» в России по результатам мая 2023 года. На регистрационный учёт в минувшем месяце встало 167 таких электрокаров, что превысило 21% всех регистраций в сегменте электрического транспорта.'},
    { tag: 'Общество', date: '2024-11-29T16:20:00', img: 'media/card4.png', title: 'Игорь Артамонов посетил белгородцев в липецком пункте временного размещения', description: 'Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас находятся жители Шебекинского района Белгородской области. В основном это семьи с детьми. Им предоставлены номера гостиничного типа.'},
    { tag: 'Общество', date: '2024-11-29T16:50:00', img: 'media/card4.png', title: 'Игорь Артамонов посетил белгородцев в липецком пункте временного размещения', description: 'Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас находятся жители Шебекинского района Белгородской области. В основном это семьи с детьми. Им предоставлены номера гостиничного типа.'},
    { tag: 'Общество', date: '2024-11-29T16:10:00', img: 'media/card1.png', title: 'Изготовленный Зурабом Церетели памятник Тихону Хренникову открыли в Ельце', description: 'Новая достопримечательность появилась в Ельце. Здесь открыли памятник композитору Тихону Хренникову. В этом году исполняется 110 лет со дня его рождения. Двухтонная скульптура полностью из бронзы. Её создал народный художник СССР и России, президент Российской академии художеств Зураб Церетели. Это первая его работа, установленная в Липецкой области.'},
    { tag: 'Спорт', date: '2024-11-29T16:00:00', img: 'media/card2.png', title: 'Липецк признан беговой столицей России 2023 года', description: 'Липецк признан беговой столицей России 2023 года по итогам полумарафона «Забег.рф». В Липецке было 4000 участников забега, которые показали лучший результат в России, набрав 29,34 итоговых зачетных балла. Данный показатель высчитывался исходя из следующих показателей: средней дистанции, преодоленной всеми участниками субъекта, соотношению участников «Забега.рф» к его населению, а также по средней скорости бега. На втором месте оказался Магадан, он набрал 27,45 балла, на третьем — Санкт-Петербург, у него 21,55 балла'},
    { tag: 'Экономика', date: '2024-11-29T18:00:00', img: 'media/card3.png', title: 'Электрокар EVOLUTE из Липецкой области признан электромобильным брендом № 1 в России', description: 'Электрокар под маркой EVOLUTE вновь подтвердил звание «Электромобиля № 1» в России по результатам мая 2023 года. На регистрационный учёт в минувшем месяце встало 167 таких электрокаров, что превысило 21% всех регистраций в сегменте электрического транспорта.'},
    { tag: 'Общество', date: '2024-11-28T16:00:00', img: 'media/card4.png', title: 'Игорь Артамонов посетил белгородцев в липецком пункте временного размещения', description: 'Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас находятся жители Шебекинского района Белгородской области. В основном это семьи с детьми. Им предоставлены номера гостиничного типа.'},
    { tag: 'Общество', date: '2024-11-27T16:00:00', img: 'media/card4.png', title: 'Игорь Артамонов посетил белгородцев в липецком пункте временного размещения', description: 'Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас находятся жители Шебекинского района Белгородской области. В основном это семьи с детьми. Им предоставлены номера гостиничного типа.'},
    { tag: 'Общество', date: '2024-11-26T16:00:00', img: 'media/card1.png', title: 'Изготовленный Зурабом Церетели памятник Тихону Хренникову открыли в Ельце', description: 'Новая достопримечательность появилась в Ельце. Здесь открыли памятник композитору Тихону Хренникову. В этом году исполняется 110 лет со дня его рождения. Двухтонная скульптура полностью из бронзы. Её создал народный художник СССР и России, президент Российской академии художеств Зураб Церетели. Это первая его работа, установленная в Липецкой области.'},
    { tag: 'Спорт', date: '2024-11-29T19:00:00', img: 'media/card2.png', title: 'Липецк признан беговой столицей России 2023 года', description: 'Липецк признан беговой столицей России 2023 года по итогам полумарафона «Забег.рф». В Липецке было 4000 участников забега, которые показали лучший результат в России, набрав 29,34 итоговых зачетных балла. Данный показатель высчитывался исходя из следующих показателей: средней дистанции, преодоленной всеми участниками субъекта, соотношению участников «Забега.рф» к его населению, а также по средней скорости бега. На втором месте оказался Магадан, он набрал 27,45 балла, на третьем — Санкт-Петербург, у него 21,55 балла'},
    { tag: 'Экономика', date: '2024-11-29T13:20:00', img: 'media/card3.png', title: 'Электрокар EVOLUTE из Липецкой области признан электромобильным брендом № 1 в России', description: 'Электрокар под маркой EVOLUTE вновь подтвердил звание «Электромобиля № 1» в России по результатам мая 2023 года. На регистрационный учёт в минувшем месяце встало 167 таких электрокаров, что превысило 21% всех регистраций в сегменте электрического транспорта.'},
    { tag: 'Общество', date: '2024-11-29T16:00:00', img: 'media/card4.png', title: 'Игорь Артамонов посетил белгородцев в липецком пункте временного размещения', description: 'Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас находятся жители Шебекинского района Белгородской области. В основном это семьи с детьми. Им предоставлены номера гостиничного типа.'},
    { tag: 'Общество', date: '2024-11-29T16:00:00', img: 'media/card4.png', title: 'Игорь Артамонов посетил белгородцев в липецком пункте временного размещения', description: 'Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас находятся жители Шебекинского района Белгородской области. В основном это семьи с детьми. Им предоставлены номера гостиничного типа.'},
]

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.closest('.dropdown')) {
        document.getElementById("dropdownMenu").classList.remove("show");
    }
}

function displayCards(cards) {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = '';

    const isSingleCard = cards.length;
    if (isSingleCard < 3) {
        const container = document.getElementById("cardsContainer");
        container.classList.remove("cards");
        container.classList.add("cardsone");
    } else {
        const container = document.getElementById("cardsContainer");
        container.classList.remove("cardsone");
        container.classList.add("cards");
    }
    
    cards.forEach(card => {
        const cardElement = document.createElement("div")
        cardElement.classList.add("card");

        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card-div");

        const tagElement = document.createElement("p");
        tagElement.innerText = card.tag;
        const dateElement = document.createElement("p");
        dateElement.innerText = new Date(card.date).toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        cardDiv.appendChild(tagElement)
        cardDiv.appendChild(dateElement)
        
        const imgElement = document.createElement("img")
        imgElement.src = card.img;

        const titleElement = document.createElement("p");
        titleElement.classList.add("article-title");
        titleElement.innerText = card.title;

        const descElement = document.createElement("p");
        descElement.classList.add("article-text");
        descElement.innerText = card.description;
        
        cardElement.appendChild(cardDiv);
        cardElement.appendChild(imgElement);
        cardElement.appendChild(titleElement);
        cardElement.appendChild(descElement);
        container.appendChild(cardElement);

    });
}