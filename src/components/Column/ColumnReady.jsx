import CardsItemOrange from "../Card/CardsItemOrange";
import CardsItemGreen from "../Card/CardsItemGreen";
import CardsItemPurple from "../Card/CardsItemPurple";
import cardsList from "/src/data.js";

const ColumnReady = () => {
    return (
        <>
            <div class="main__column">
                <div class="column__title">
                    <p>Готово</p>
                </div>
                <div class="cards">
                    {cardsList.map((card) => 
                    {
                        if (card.theme === "Web Design" && card.status === "Готово") {
                            return <CardsItemOrange key={card.id} />
                        }
                        if (card.theme === "Research" && card.status === "Готово") {
                            return <CardsItemGreen key={card.id} />
                        }
                        if (card.theme === "Copywriting" && card.status === "Готово") {
                            return <CardsItemPurple key={card.id} />
                        }
                    }
                    )}
                </div>
            </div>
        </>
    );
}

export default ColumnReady;