import CardsItemOrange from "../Card/CardsItemOrange";
import CardsItemGreen from "../Card/CardsItemGreen";
import CardsItemPurple from "../Card/CardsItemPurple";
import cardsList from "/src/data.js";

const ColumnInWork = () => {
    return (
        <>
            <div class="main__column">
                <div class="column__title">
                    <p>В работе</p>
                </div>
                <div class="cards">
                    {cardsList.map((card) => 
                    {
                        if (card.theme === "Web Design" && card.status === "В работе") {
                            return <CardsItemOrange key={card.id} />
                        }
                        if (card.theme === "Research" && card.status === "В работе") {
                            return <CardsItemGreen key={card.id} />
                        }
                        if (card.theme === "Copywriting" && card.status === "В работе") {
                            return <CardsItemPurple key={card.id} />
                        }
                    }
                    )}
                </div>
            </div>
        </>
    );
}

export default ColumnInWork;