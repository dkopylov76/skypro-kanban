import CardsItemOrange from "../Card/CardsItemOrange";
import CardsItemGreen from "../Card/CardsItemGreen";
import CardsItemPurple from "../Card/CardsItemPurple";

const ColumnInWork = () => {
    return (
        <>
            <div class="main__column">
                <div class="column__title">
                    <p>В работе</p>
                </div>
                <div class="cards">
                    <CardsItemGreen />
                    <CardsItemPurple />
                    <CardsItemOrange />
                </div>
            </div>
        </>
    );
}

export default ColumnInWork;