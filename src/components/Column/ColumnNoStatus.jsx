import CardsItemOrange from "../Card/CardsItemOrange";
import CardsItemGreen from "../Card/CardsItemGreen";
import CardsItemPurple from "../Card/CardsItemPurple";

const ColumnNoStatus = () => {
    return (
        <>
            <div class="main__column column">
                <div class="column__title">
                    <p>Без статуса</p>
                </div>
                <div class="cards">
                    <CardsItemOrange />
                    <CardsItemGreen />
                    <CardsItemOrange />
                    <CardsItemPurple />
                    <CardsItemOrange />
                </div>
            </div>
        </>
    );
}

export default ColumnNoStatus;