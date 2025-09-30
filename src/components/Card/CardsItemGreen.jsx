import cardsList from "/src/data.js";

// const CardsItemGreen = () => {
// for (let i = 0; i < cardList.length; ++i) {
//     return (
//     <>
//     <div> {cardList[i].id} </div>    
//     // console.log(cardList[i].id);
//     <p class="_green"> {cardList[i].theme} </p>
//     {/* console.log(cardList[i].theme); */}
//     <h3 class="card__title"> {cardList[i].title} </h3>
//     {/* console.log(cardList[i].title); */}
//     <p> {cardList[i].date} </p>
//     <p> {cardList[i].status} </p>
//     {/* console.log(cardList[i].date);
//     console.log(cardList[i].status); */}
//     </>
//     )
// }
// }
// export default CardsItemGreen;

// cardsList.forEach((card) => {
//     console.log(card)
// });

for (const card of cardsList) {
    console.log(card)
};

function создатьКалькулятор() {
    return {
        сложить: function(a, b) {
            return a + b;
        },
        вычесть: function(a, b) {
            return a - b;
        }
    }
}

const калькулятор = создатьКалькулятор();
console.log(калькулятор.вычесть(5, 3));



const CardsItemGreen = () => {
    for (let i = 5; i < cardsList.length; ++i) {
        
    return (
        <>
            <div class="cards__item">
                <div class="cards__card card">
                    <div> {cardsList[i].id} </div>
                    <div class="card__group">
                        <div class="card__theme _green">
                            <p class="_green"> {cardsList[i].theme} </p>
                        </div>
                        <a href="#popBrowse" target="_self">
                            <div class="card__btn">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </a>
                    </div>
                    <div class="card__content">
                        <a href="" target="_blank">
                            <h3 class="card__title"> {cardsList[i].title} </h3>
                        </a>
                        <div class="card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <g clipPath="url(#clip0_1_415)">
                                    <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                                    <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_415">
                                        <rect width="13" height="13" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p> {cardsList[i].date} </p>
                            <p> {cardsList[i].status} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
}

export default CardsItemGreen;