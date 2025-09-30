import CardsItemOrange from "../Card/CardsItemOrange";
import CardsItemGreen from "../Card/CardsItemGreen";
import CardsItemPurple from "../Card/CardsItemPurple";
// import cardsList from "/src/data.js";

const ColumnNoStatus = ({header, cards}) => {
    // for (let i = 0; i < cardList.length; ++i) {
    return (
        <>
            <div class="main__column column">
                <div class="column__title">
                    <p>{header}</p>
                </div>
                <div class="cards">
                    {cards.map((card) => (<CardsItemOrange key={card.id} id={card.id} theme={card.theme} title={card.title} date={card.date} />))}
                        {/* // if (card.theme === "Research" && card.status === "Без статуса") {
                        //     return <CardsItemGreen key={card.id} />
                        // }
                        // if (card.theme === "Copywriting" && card.status === "Без статуса") {
                        //     return <CardsItemPurple key={card.id} />
                        // }
                    // }
                    // )} */}
                </div>
            </div>
        </>
    );
}
// }

export default ColumnNoStatus;