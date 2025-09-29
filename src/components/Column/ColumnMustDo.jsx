import CardsItemOrange from "../Card/CardsItemOrange";
import CardsItemGreen from "../Card/CardsItemGreen";
import CardsItemPurple from "../Card/CardsItemPurple";
import cardsList from "/src/data.js";

const ColumnMustDo = () => {
    return (
        <>
            <div class="main__column">
                <div class="column__title">
                    <p>Нужно сделать</p>
                </div>
                <div class="cards">
                    {cardsList.map((card) => 
                    {
                        if (card.theme === "Web Design" && card.status === "Нужно сделать") {
                            return <CardsItemOrange key={card.id} />
                        }
                        if (card.theme === "Research" && card.status === "Нужно сделать") {
                            return <CardsItemGreen key={card.id} />
                        }
                        if (card.theme === "Copywriting" && card.status === "Нужно сделать") {
                            return <CardsItemPurple key={card.id} />
                        }
                    }
                    )}
                </div>
            </div>
        </>
    );
}

export default ColumnMustDo;